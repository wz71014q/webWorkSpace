process.stdin.on('end', () => {
  process.stdout.write('end');
});

function gets(cb) {
  process.stdin.setEncoding('utf8');
  // 输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
  process.stdin.resume();
  process.stdin.on('data', (chunk) => {
    console.log('start!');
    // 去掉下一行可一直监听输入，即保持标准输入流为开启模式
    process.stdin.pause();
    cb(chunk);
  });
  console.log('试着在键盘敲几个字然后按回车吧');
}

gets((reuslt) => {
  console.log('reuslt' + reuslt);
  console.log('当前目录：' + process.cwd());
  console.log('当前平台：' + process.platform);
  process.stdin.emit('end'); // 触发end事件
});
