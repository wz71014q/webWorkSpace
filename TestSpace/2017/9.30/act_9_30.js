var innerpro = document.getElementById('innerimg')
var out = document.getElementById('out')
var filling = document.getElementById('filling')
var txt = document.getElementById('txt')
var outx = innerpro.clientLeft
var target
function staticProgress () {
  /**
   * @author Qiang
   * @function staticProgress -- 加载进度条
   */
  var pg = document.getElementById('pg')
  var pgv = document.getElementById('pgv')
  var timer = setInterval(function () {
    if (pg.value !== 100) {
      pg.value++
      pgv.innerHTML = '进度：' + pg.value + '%'
    } else {
      pgv.innerHTML = '加载完成'
      clearInterval(timer)
    }
  }, 100)
}
function dvnamicprogress () {
  /**
   * @author Qiang
   * @function dvnamicprogress -- 滑杆
   */
  out.addEventListener('click', fillingClick, false)
  innerpro.addEventListener('touchstart', fillingMove, {passive: true}, false)
  innerpro.addEventListener('mousedown', fillingMove, false)
}
function fillingClick (e) {
  innerpro.style.left = e.clientX - 20 + 'px'
  filling.style.width = e.clientX - 20 + 'px'
  txt.innerHTML = '音量：' + parseInt((e.clientX - 20) / 160 * 100)
}
function fillingMove (event) {
  innerpro.addEventListener('touchmove', sliderMove, {passive: true}, false)
  document.addEventListener('mousemove', sliderMove, false)
  document.addEventListener('mouseup', clear, false)
}
function sliderMove (event) {
  if (event.touches) {
    target = event.touches[0]
  } else {
    target = event || window.event
  }
  console.log('鼠标的位置：X=>' + target.clientX + ', Y=>' + target.clientY)
  var prolong = target.clientX - 20 - outx
  if (prolong < 0) {
    prolong = 0
  } else if (prolong > 160) {
    prolong = 160
  }
  txt.innerHTML = '音量：' + parseInt(prolong / 160 * 100)
  filling.style.width = prolong + 'px'
  innerpro.style.left = prolong + 'px'
}
function clear () {
  document.removeEventListener('mousemove', sliderMove, false)
  document.removeEventListener('mousedown', fillingMove, false)
}
window.onload = function () {
  staticProgress()
  dvnamicprogress()
}
