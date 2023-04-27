import { getSideBarData } from './getSideBar.js';
import * as fs from 'fs';
import * as path from 'path'
import { fileURLToPath } from 'url';

let __dirname = path.dirname(fileURLToPath(import.meta.url));  
// .../mdBase/...   存放数据的目录
let dataBase = path.resolve(__dirname, "../mdBase");


function getFileDetial(){
  let items = fs.readdirSync(dataBase);

  let sideBarName = []
  for(let item of items){
    sideBarName.push('/mdBase/' + item + '/')
  }

  let fileDetial = []
  for(let item of sideBarName){
    let fileItem = getSideBarData(item.split("/")[2])[0].items
    let name = item.split("/")[2]
    for(let i of fileItem){
      if(i.text === name) continue;
      i.url = path.join(dataBase,'../', i.link,);
      i.url += '.md'
      fileDetial.push(i)
    }
  }
  // console.log(fileDetial[0].url);
  for(let i of fileDetial){
    let data = fs.readFileSync(i.url, 'utf-8');
    let intro = data.split('---')[1].split('intro: ')[1]
    if(intro){
      i.intro = intro.split('\r')[0]
    }else{
      i.intro = ''
    }
  }
  return fileDetial
}

function getFileDict(){
  let items = fs.readdirSync(dataBase); 
  let fileDict = []
  for(let item of items){
    let typeItem = {}
    let link = '/mdBase/' + item + '/'
    typeItem.name = item
    typeItem.link = link
    fileDict.push(typeItem)
  }
  return fileDict
  // console.log(fileDict);
}

export function getFileTree(){
  let fileTree = {}

  let fileDetail = getFileDetial()
  let fileDict = getFileDict()

  fileTree.fileDetail = fileDetail
  fileTree.fileDict = fileDict
  // console.log(fileTree);
  fs.writeFileSync('./docs/src/fileTree.json', JSON.stringify(fileTree))
}
// getFileTree()
