import directoryTree  from 'directory-tree'
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import * as path from 'path'

let __dirname = path.dirname(fileURLToPath(import.meta.url));  
// .../mdBase/...   存放数据的目录
let dataBase = path.resolve(__dirname, "../mdBase");


// 通过文件夹名字获取侧边栏数据
function getSideBarData(type){

  // eg: mdBase/ts
  let baseUrl = path.join(dataBase, type);
  
  let theDir = directoryTree(baseUrl, {
    extensions: /\.md$/,
    normalizePath: true,
  });
  let router = theDir.name // ts
  baseUrl = "mdBase/"+router; // /mdBase/ts
  let children = theDir.children
  let last = [];
  let time
  // console.log(children);
  for(let i in children){
    let item = {};
    // text
    if(children[i].name.split(".")[0] === 'index'){
      item.text = router;
    }
    else{
      item.text = children[i].name.split(".")[0]; // 123
    }
    // link
    item.link = `/${baseUrl}/${children[i].name.split(".")[0]}`;
    // createTime
    item.createTime = new Date(fs.statSync(children[i].path).ctime)
    item.createTime = item.createTime.getTime()
    last.push(item);
  }
  let result = [{
    text: type.toUpperCase(),
    items: last,
  }]
  result[0].items.sort(function(a, b) {
    return b.createTime < a.createTime ? -1 : 1
  })
  // console.log(result[0].items);
  return result;
}

export function getSideBar(){

  //获取目录下文件（全部知识库）
  let items = fs.readdirSync(dataBase);
  // console.log("mdBase下的文件夹:",items);
  //侧边栏路由
  let sideBarName = []
  for(let item of items){
    sideBarName.push('/mdBase/' + item + '/')
  }
  // console.log('侧边栏路由:'+sideBarName);

  let sidebar = {}

  for(let item of sideBarName){
    sidebar[item] = getSideBarData(item.split("/")[2])
  }
  // console.log('侧边栏对象:',sidebar)
  return sidebar
}