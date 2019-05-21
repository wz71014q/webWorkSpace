const path = require('path');
const { spawn } = require('child_process');

let p = spawn('node', ['child_t.js'], {
  cwd: path.join(__dirname, './'),
  stdio: ['ipc', 'pipe', 'pipe']
});

// let p = spawn('ps.bat');
p.on('message', (msg) => {
  console.log(msg, p.pid);
});
p.on('exit', (code, signal) => {
  console.log(code, signal);
});

p.send('hello chhild_process');
p.unref();
p.ref();
