const net = require('net');
const readLine = require('readline');

const port = 9000;
const host = '127.0.0.1';

const client = new net.Socket();
client.setEncoding = 'utf-8';

client.connect(port, host, () => {
  client.write('I\'m come in');
});
client.on('data', (data) => {
  client.write('服务端传来', data);
  say();
});
client.on('error', (err) => {
  console.log(err);
  client.end();
});
client.on('close', () => {
  console.log('连接已断开');
});
const r1 = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});
function say() {
  r1.question('请输入', (inputStr) => {
    if (inputStr !== 'bye') {
      client.write(inputStr + '\n');
    } else {
      client.distroy();
      r1.close();
    }
  });
}
