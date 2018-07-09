function init() {
  var tmp = 123;
  console.log(`init, ${tmp}`);
}
function letFunc() {
  (function () {
    function init() { console.log('I am inside!'); }
    init();
  }());
}
window.onload = function () {
  // init();
  letFunc();
};
