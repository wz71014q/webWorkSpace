const fs = require('fs');

fs.mkdir('logs', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
});
fs.writeFile('logs/hello.log', 'hello~\n', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('成功写入数据');
  }
});
fs.appendFile('logs/hello.log', '文件系统~\n', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('成功写入数据');
  }
});
fs.readFile('logs/hello.log', 'utf8', (err, data) => {
  console.log(data);
});

