const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 9000 });

let item = 1;
const clientMap = {};
wss.on('connection', (ws) => {
  console.log(ws + '上线');
  ws.name += item;
  clientMap[ws.name] = ws;
  ws.on('message', (message) => {
    broadcast(message, ws);
  });
  ws.on('close', () => {
    console.log('离开');
  });
});

function broadcast(msg, ws) {
  // for(let key in clientMap) {
  //   clientMap[keys].send(ws.name + '说' + msg);
  // }
  for (let i = 0; i < Object.keys(clientMap).length; i++) {
    clientMap[Object.keys(clientMap)[i]].send(ws.name + '说' + msg);
  }
}
