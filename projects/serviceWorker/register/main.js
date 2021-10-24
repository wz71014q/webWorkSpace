// function init() {
//   const bc = new BroadcastChannel('MSGCHANNEL');
//   bc.onmessage = function(e) {
//     const data = e.data;
//     console.log('BroadcastChannel' + data);
//   };
//   document.querySelector('#root').addEventListener('click', () => {
//     // bc.postMessage('hello! This is msg_emit');
//     console.log('msg_emit send');
//   });
// }

function init() {
  navigator.serviceWorker.register('./sw.js')
  .then(() => {
    console.log('注册成功');
  })
  .catch(function(error) {
    console.log('Registration failed with ' + error);
  });
  document.querySelector('#root').addEventListener('click', () => {
    navigator.serviceWorker.controller.postMessage('this is emit');
  });
}
// init();