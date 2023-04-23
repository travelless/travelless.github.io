import { fileURLToPath } from 'url';
import * as fs from 'fs';
import * as path from 'path'
import directoryTree  from 'directory-tree'

let __dirname = path.dirname(fileURLToPath(import.meta.url));  
// .../mdBase/...   存放数据的目录
let dataBase = path.resolve(__dirname, "../mdBase/");
let items = fs.readdirSync(dataBase);
// let content = fs.readFileSync(items[0])

// 尝试手写directoryTree



let baseUrl = path.join(dataBase, 'todo');
// let myDir = fs.readdirSync(baseUrl);


let theDir = directoryTree(baseUrl, {
  extensions: /\.md$/,
  normalizePath: true,
});

function mydirTree(url,{extensions}){
  url = url.replaceAll("\\","/")
  let result = {
    name: url.split("/").pop(),
    path: url,
    children: [],
  }
  let files = fs.readdirSync(url);
  for(let i in files){
    let item = {};
    let filePath = path.join(url, files[i]);
    let stats = fs.statSync(filePath);
    if(stats.isDirectory()){
      item = mydirTree(filePath,{extensions});
    }
    else{
      item = {
        name: files[i],
        path: filePath,
      }
    }
    result.children.push(item);
  }
  return result;
}

let myDir = mydirTree(baseUrl,{extensions: /\.md$/,normalizePath: true,});

console.log("myDir");
console.log(myDir);
console.log("theDir");
console.log(theDir);

