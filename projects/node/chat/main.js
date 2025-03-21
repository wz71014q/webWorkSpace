const net = require('net');

const chartServer = net.createServer();
const clientMap = {};
let i = 0;
chartServer.on('connection', (client) => {
  console.log('有人上线了');
  client.name = ++i;
  clientMap[client.name] = client;
  // 对客户端消息进行监听
  client.on('data', (data) => {
    console.log('客户端传递信息：' + data.toString());
    broadCoast(data, client);
  });
  // 错误处理
  client.on('error', (err) => {
    console.log('client error: ' + err);
    client.end();
  });
  // 客户端关闭
  client.on('close', (data) => {
    delete clientMap[client.name];
    console.log(client.name + '下线了');
    broadCoast(`${client.name}下线了`, client);
  });
});
// 消息广播
function broadCoast(msg, client) {
  for (let key in clientMap) {
    if (Object.prototype.hasOwnProperty.call(clientMap, key)) {
      clientMap[key].write(client.name + 'say: ' + msg + '\n');
    }
  }
}
chartServer.listen(9000);

