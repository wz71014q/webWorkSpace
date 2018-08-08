var content
function init () {
  var arrPlace = document.getElementsByClassName('arrow')[0]
  arrPlace.width = 500
  arrPlace.height = 500
  if (arrPlace.getContext) {
    content = arrPlace.getContext('2d')
  } else {
    window.alert('your browser do not support canvas')
  }
  paint()
}
function paint () {
  content.beginPath()
  content.lineTo(30, 30) /* beginPath()和linrTo()连用可以替代moveTo() */
  content.lineTo(60, 60)
  content.lineTo(90, 30)
  content.stork
}
window.onload = function () {
  init()
}
