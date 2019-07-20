// function init() {
//   const bc = new BroadcastChannel('MSGCHANNEL');
//   bc.onmessage = function(e) {
//     const data = e.data;
//     console.log('BroadcastChannel' + data);
//   };
//   bc.postMessage('hello! This is msg_emit');
// }

function init() {
  navigator.serviceWorker.addEventListener('message', function(e) {
    const data = e.data;
    console.log(data);
  })
}
init();