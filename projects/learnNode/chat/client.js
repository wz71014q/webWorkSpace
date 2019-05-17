const net = require('net');
const readLine = require('readline');

const port = 9000;
const host = '127.0.0.1';

const client = new net.Socket();
client.setEncoding = 'utf8';

client.connect(port, host, () => {
  client.write('您好');
});

client.on('data', (data) => {
  console.log('服务端传来' + data.toString());
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
  r1.question('请输入\n', (inputStr) => {
    if (inputStr !== 'bye') {
      client.write(inputStr + '\n');
    } else {
      client.destroy();
      r1.close();
    }
  });
}
