var innerpro = document.getElementById('innerimg')
var out = document.getElementById('out')
var slider = document.getElementById('slider')
var txt = document.getElementById('txt')
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
  out.addEventListener('click', sliderClick, false)
  innerpro.addEventListener('touchstart', sliderMove, false)
}
function sliderClick (e) {
  innerpro.style.left = e.clientX - 20 + 'px'
  slider.style.width = e.clientX - 20 + 'px'
  txt.innerHTML = '音量：' + parseInt((e.clientX - 20) / 160 * 100)
}
function sliderMove (e) {
  var outx = innerpro.clientLeft
  document.ontouchmove = function (e) {
    console.log('鼠标的位置：X=>' + e.clientX + '，Y=>' + e.clientY)
    var prolong = e.clientX - 20 - outx
    if (prolong < 0) {
      prolong = 0
    } else if (prolong > 160) {
      prolong = 160
    }
    txt.innerHTML = '音量：' + parseInt(prolong / 160 * 100)
    slider.style.width = prolong + 'px'
    innerpro.style.left = prolong + 'px'
  }
  document.ontouchend = function () {
    document.ontouchmove = null
    document.ontouchstart = null
  }
}
// function getStyle (element, attr) {
//   if (element.currentStyle) {
//     return element.currentStyle[attr]
//   } else {
//     // eslint-disable-next-line
//     return getComputedStyle(element, false)[attr]
//   }
// }
// function stopPropagation (e) {
//   e.stopPropagation()
// }
window.onload = function () {
  staticProgress()
  dvnamicprogress()
}
