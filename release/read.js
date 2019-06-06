const shell = require('shelljs');
// const program = require('commander');
const path = require('path');
const fse = require('fs-extra');
const JSZip = require('jszip');

shell.echo('开始压缩');

// const folder = 'vue';
let zip = new JSZip();


function readDir(obj, nowPath) {
  let files = fse.readdirSync(nowPath);// 读取目录中的所有文件及文件夹（同步操作）
  let zipObj;
  const addFile = function (zipObj) {
    files.forEach((fileName, index) => { // 遍历检测目录中的文件
      console.log(fileName, index);// 打印当前读取的文件名
      let fillPath = nowPath + '/' + fileName;
      let file = fse.statSync(fillPath);// 获取一个文件的属性
      if (file.isDirectory()) { // 如果是目录的话，继续查询
        let dirlist = zip.folder(fileName);// 压缩对象中生成该目录
        addPath(dirlist, fillPath)();// 重新检索目录文件
      } else {
        obj.file(fileName, fse.readFileSync(fillPath));// 压缩目录添加文件
      }
    });
  };
}

function addPath(zipObj, fileName) {
  return function () {
    zipObj = zipObj.folder(fileName);
  };
}

// 读取目录及文件
// function readDir(obj, nowPath) {
//   let files = fse.readdirSync(nowPath);// 读取目录中的所有文件及文件夹（同步操作）
//   console.log(files);
//   console.log(fse.statSync(nowPath).isDirectory());
//   files.forEach((fileName, index) => { // 遍历检测目录中的文件
//     // console.log(fileName, index);// 打印当前读取的文件名
//     let fillPath = nowPath + '/' + fileName;
//     let file = fse.statSync(fillPath);// 获取一个文件的属性
//     if (file.isDirectory()) { // 如果是目录的话，继续查询
//       let dirlist = zip.folder(fileName);// 压缩对象中生成该目录
//       readDir(dirlist, fillPath);// 重新检索目录文件
//     } else {
//       obj.file(fileName, fse.readFileSync(fillPath));// 压缩目录添加文件
//     }
//   });
// }

// 开始压缩文件
function startZIP() {
  readDir(zip, path.join(__dirname));
  zip.generateAsync({// 设置压缩格式，开始打包
    type: 'nodebuffer', // nodejs用
    compression: 'DEFLATE', // 压缩算法
    compressionOptions: {// 压缩级别
      level: 9
    }
  })
    .then((content) => {
      fse.writeFileSync(path.join(__dirname) + '/result.zip', content, 'utf-8');// 将打包的内容写入 当前目录下的 result.zip中
    });
}

startZIP();
