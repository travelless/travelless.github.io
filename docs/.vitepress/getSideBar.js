import * as path from 'path'
import directoryTree  from 'directory-tree'
import { fileURLToPath } from 'url';
import * as fs from 'fs';
export function getSideBar(type, text){
  let __dirname = path.dirname(fileURLToPath(import.meta.url));
  // mdBase/...
  let baseUrl = path.resolve(__dirname, "../mdBase");
  // eg: mdBase/ts
  baseUrl = path.join(baseUrl, type);
  
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
    text: text,
    items: last,
  }]
  result[0].items.sort(function(a, b) {
    return b.createTime < a.createTime ? -1 : 1
  })
  // console.log(result[0].items);
  return result;
}


// getSideBar("ts", "TS")