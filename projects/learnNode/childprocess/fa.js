const path = require('path');
const { spawn } = require('child_process');

let p = spawn('node', ['child_t.js'], {
  cwd: path.join(__dirname, './'),
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

// let p = spawn('ps.bat');
// p.send('hello chhild_process');
// p.on('message', (msg) => {
//   console.log(msg, p.pid);
// });
// p.on('exit', (code, signal) => {
//   console.log(code, signal);
// });
p.unref();
p.ref();
