const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 9000 });

let item = 0;
const clientMap = {};
wss.on('connection', (ws) => {
  ws.name = item + 1;
  clientMap[ws.name] = ws;
  console.log(ws.name + '上线');
  ws.on('message', (message) => {
    broadcast(message, ws);
  });
  ws.on('close', () => {
    console.log('离开');
  });
});

function broadcast(msg, ws) {
  for (let i = 0; i < Object.keys(clientMap).length; i++) {
    clientMap[Object.keys(clientMap)[i]].send(ws.name + '说' + msg);
  }
}
