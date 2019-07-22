import './index.html';

const ws = new WebSocket('ws:127.0.0.1:9000/');

ws.onopen = function () {
  ws.send('大家好, 服务器已连接');
};

ws.onmessage = function (event) {
  const chartroot = document.querySelector('#chartroom');
  chartroot.innerHTML += '</br>' + event.data;
};

ws.onclose = function () {
  console.log('server closed');
};

ws.onerror = function (err) {
  console.log('there is a err: ' + err);
};

function send() {
  ws.send(document.querySelector('#sayinput').value);
  document.querySelector('#sayinput').value = '';
}
document.onkeyup = function (event) {
  if (event.keyCode === 13) {
    send();
  }
};
document.querySelector('#sendbutton').onclick = function () {
  send();
};

