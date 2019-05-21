// child.send(message, ()=>{}); 在父进程中向子进程发送消息
// process.send('message', ()=>{}); 在子进程向父进程发送消息
console.log('子进程已启动');
process.on('message', (msg) => {
  process.send('i\'m from child!' + msg);
  process.exit();
});
