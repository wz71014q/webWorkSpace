const shell = require('shelljs');
const program = require('commander');
const path = require('path');
const fse = require('fs-extra');
const JSZip = require('jszip');

shell.echo('开始压缩');

const folder = 'vue';
let zip = new JSZip();

const greePlus = process.cwd();

const plugin = path.resolve(__dirname, '../../', 'projects', folder);
const target = path.resolve(__dirname, '../../', 'release');

fse.emptyDirSync(target);
fse.copySync(plugin, target, {overwrite: true});
// const compiler = webpack(inlineConfig);
// fse.removeSync(target);
shell.cd(target);

zip.folder(folder).folder("folder_2").folder("folder_3").file("hello.txt", "hello");

zip.folder(folder).generateAsync({type:"nodebuffer"})
.then(function (content) {
    fse.writeFile(`${folder}.zip`, content, function(err){ console.log(err); });
});

//读取目录及文件
function readDir(obj, nowPath) {
 let files = fs.readdirSync(nowPath);//读取目录中的所有文件及文件夹（同步操作）
 files.forEach(function (fileName, index) {//遍历检测目录中的文件
   console.log(fileName, index);//打印当前读取的文件名
   let fillPath = nowPath + "/" + fileName;
   let file = fs.statSync(fillPath);//获取一个文件的属性
   if (file.isDirectory()) {//如果是目录的话，继续查询
       let dirlist = zip.folder(fileName);//压缩对象中生成该目录
       readDir(dirlist, fillPath);//重新检索目录文件
   } else {
       obj.file(fileName, fs.readFileSync(fillPath));//压缩目录添加文件
   }
 });
}
 
 //开始压缩文件
 function startZIP() {
     var currPath = __dirname;//文件的绝对路径 当前当前js所在的绝对路径
     var targetDir = path.join(currPath, "JsonMerge");
     readDir(zip, targetDir);
     zip.generateAsync({//设置压缩格式，开始打包
         type: "nodebuffer",//nodejs用
         compression: "DEFLATE",//压缩算法
         compressionOptions: {//压缩级别
             level: 9
         }
     }).then(function (content) {
         fs.writeFileSync(currPath + "/result.zip", content, "utf-8");//将打包的内容写入 当前目录下的 result.zip中
     });
 }
 
 startZIP();


















// program
//   .command('edition <edition>')
//   .option('-e, --e <edition>', 'seletct edition')
//   .action((edition) => {
//     shell.find();
//   });
// program.parse(process.argv);