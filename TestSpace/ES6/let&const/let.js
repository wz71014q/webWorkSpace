function init() {
  var tmp = 123;
  console.log('init');
  if (true) {
    tmp = 'abc';
    let tmp;
  }
  console.log(tmp);
}
function f () {
}
Window.onload = function () {
  init();
}
