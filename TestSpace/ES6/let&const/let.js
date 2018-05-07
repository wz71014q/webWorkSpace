function init () {
  console.log('init')
  var tmp = 123
  if (true) {
    tmp = 'abc'
    let tmp
  }
  console.log(tmp)
}
window .onload = function () {
  init()
}
