const { spawn } = require('child_process');
const path = require('path');

const child = spawn('node', ['process.js'], {
  cwd: path.join(__dirname, './')
});

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stderr.on('data', (data) => {
  console.log('stderr', data);
});

child.on('close', (code) => {
  console.log('child process exited with code', code);
});
