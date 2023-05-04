---

intro: 操作系统实验三，通过共享文件内存的方式实现进程间通信
---

# 共享内存实现Linux进程间通信

## 定义解析

共享内存就是允许两个不相关的进程访问同一个逻辑内存。

共享内存是在两个正在运行的进程之间共享和传递数据的一种非常有效的方式。不同进程之间共享的内存通常安排为同一段物理内存。进程可以将同一段共享内存连接到它们自己的地址空间中，所有进程都可以访问共享内存中的地址。而如果某个进程向共享内存写入数据，所做的改动将立即影响到可以访问同一段共享内存的任何其他进程。

但共享内存没有同步机制，因此在前一个进程结束读写操作前并没有防止第二个进程同时进行读写的措施，所以需要使用者自行创建同步机制，本次实验采用的同步机制为信号量机制。

## 接口解析

### shmget()函数

作用：通过给定参数创建共享内存，并返回共享内存的标识符 (此处用ret表示) 。

原型声明

```c
int shmget(key_t key, size_t size, int shmflg);
```

参数解析

- key -- key_t类型 本质类型为int (非0整数) ，shmget函数将根据key来生成ret，相当于ret的生成种子。
- size -- size_t类型 本质类型为int 用来记录共享内存的大小 单位为字节。
- shmflg -- int类型 表示权限值 (例 0644) 可与IPC_CREAT 或 IPC_EXCL等选项进行或操作 (例 IPC_CREAT|0644)
  - IPC_CREAT  如果共享内存不存在，则创建一个共享内存，否则打开该内存。
  - IPC_EXCL   只有在共享内存不存在的时候，新的共享内存才建立，否则就产生错误。
- ret -- int类型 函数返回值 共享内存的标识符

### shmat()函数

作用：启动进程对该共享内存的访问，并把共享内存连接到当前进程的地址空间。

原型声明

```c
void *shmat(int shm_id, const void *shm_addr, int shm_flg);
```

参数解析

- shm_id -- int类型 由shmget()函数返回的共享内存标识。
- shm_addr -- 表示共享内存连接到当前进程的地址位置，通常为空，此时系统自动分配。
- shm_flg -- int类型 一组标识位，通常为0。

## 代码实现

### Makefile 文件

```cmake
all : init sender receiver
.PHONY : clean
init : init.o common.o
	cc -pthread -o init init.o common.o
sender : sender.o common.o
	cc -pthread -o sender sender.o common.o
receiver : receiver.o common.o
	cc -pthread -o receiver receiver.o common.o
init.o : common.h           
sender.o : common.h
receiver.o : common.h
clean : 
	rm  init 
	rm  receiver
	rm  sender 
	rm  *.o
```

### common.h 文件

```c
#ifndef   _COMMON_H_
#define   _COMMON_H_
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <pthread.h>  
#include <semaphore.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/shm.h>

static const char * MUTEX_NAME = "mutex_shm";
static const char * FULL_NAME  = "full_shm";

#define SHM_SIZE 1024 //输入的最大长度

#define KEY_NUM 1000

//返回共享内存的标识符
int GetShmId(key_t key);
void SemInit();
void SemDestroy();
void  P(sem_t *sem);
void  V(sem_t *sem);
#endif
```

### common.c 文件

```c
#include "common.h"

int GetShmId(key_t key)
{
    int shmid;

    shmid = shmget(key,SHM_SIZE,IPC_CREAT|0666);
    if(shmid < 0)
    {
        perror("Receiver: Shmget Error");
        exit(EXIT_FAILURE);
    }

    return shmid;
}

/*
* create mutex + semaphore
* init those value
*/
void SemInit()
{
     /*
     * Funtion Prototype: 
     *
     *  sem_t *sem_open(const char *name, int oflag,
     *                  mode_t mode, unsigned int value);
     *                 
     * name     : MUTEX_NAME    "mutex_shm"
     * oflag    : O_CREAT       Create and initialize it if not exist
     * mode_t   : file perssion -rw-r--r--
     * value    : 1
     */
     if((sem_open(MUTEX_NAME,O_CREAT,0644,1)) < 0)
     {
        perror("sem_open");
        exit(EXIT_FAILURE);
     }

     if((sem_open(FULL_NAME,O_CREAT,0644,0)) < 0){
        perror("sem_open");
        exit(EXIT_FAILURE);
     }
}


/*
* close and unlink semaphore that we crated
*/
void SemDestroy()
{
    sem_t * mutexPtr = sem_open(MUTEX_NAME,O_CREAT); 
    sem_t * fullPtr= sem_open(FULL_NAME,O_CREAT);

    /* Destroy mutex */
    sem_close(mutexPtr);                // int sem_close(sem_t *sem);
    sem_unlink(MUTEX_NAME);         // int sem_unlink(const char *name);

    /* Destory full*/
    sem_close(fullPtr);
    sem_unlink(FULL_NAME);
}


void  P(sem_t *semPtr)
{
    sem_wait(semPtr);                   //int sem_wait(sem_t *sem);
}

void  V(sem_t *semPtr)
{
    sem_post(semPtr);                   //int sem_post(sem_t *sem);
}
```

### init.c 文件

```c
#include "common.h"

int main(int argc, char const *argv[])
{
    key_t key;
    int semid;          //semaphore id
    int shmid;          //shared memory id

    /* Create key*/
    key = KEY_NUM;

    /* Initialize Semaphore*/
    SemInit();

    /* TODO Initialize Shared Memory*/ 
    GetShmId(key);

    printf("End of initialize\n");
    return 0;
}
```

### sender.c 文件

```c
#include "common.h"

//key
key_t key;

//shared memory
int shmid;
char * shmptr;
char input[SHM_SIZE];

//semaphore 
sem_t * full;
sem_t * mutex;

void Init()
{
    key = KEY_NUM;                  //init key
    shmid  = GetShmId(key);         // init shared memory
    shmptr = shmat(shmid,NULL,0);       // attach segement to vitural ...?
    //semaphore init
    full = sem_open(FULL_NAME,O_CREAT);
    mutex = sem_open(MUTEX_NAME,O_CREAT);
}

void SaveMessage()
{
    P(mutex);                       
    strcpy(shmptr,input);
    V(mutex);
    V(full);
}

int main(int argc, char const *argv[])
{
    Init();

    /*waiting for user to input message*/
    scanf("%s",input);                  //input message from shell 
                                        // TODO input a whole line
    SaveMessage();

    printf("Sender:  Process End\n");
    return 0;
}
```

### receiver.c 文件

```c
#include "common.h"

//key
key_t key;

//shared memory
int shmid;
char * shmptr;
char result[SHM_SIZE];

//semaphore 
sem_t * full;
sem_t * mutex;

void Init()
{
    key = KEY_NUM;                  //init key
    shmid  = GetShmId(key);         // init shared memory
    shmptr = shmat(shmid,NULL,0);       // attach segement to vitural ...?
    //semaphore init
    full = sem_open(FULL_NAME,O_CREAT);
    mutex = sem_open(MUTEX_NAME,O_CREAT);
}

void ReadMessage()
{
    P(full);
    P(mutex);                       
    strcpy(result,shmptr);
    V(mutex);
}

int main(int argc, char const *argv[])
{
    Init();

    /*waiting for user to input message*/
    ReadMessage();

    printf("Receiver : message is %s\n",result);
    SemDestroy();
    printf("Receiver :  Process End \n");
    return 0;
}
```

