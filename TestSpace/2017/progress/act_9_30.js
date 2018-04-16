var innerpro = document.getElementById('innerimg')
var out = document.getElementById('out')
var filling = document.getElementById('filling')
var txt = document.getElementById('txt')
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
  if (document.addEventListener) {
    out.addEventListener('click', fillingClick, false)
    innerpro.addEventListener('touchstart', fillingMove, {passive: true}, false)
    innerpro.addEventListener('mousedown', fillingMove, false)
  } else if (document.attachEvent) {
    out.attachEvent('click', fillingClick, false)
    innerpro.attachEvent('touchstart', fillingMove, {passive: true}, false)
    innerpro.attachEvent('mousedown', fillingMove, false)
  }
}
function fillingClick (event) {
  event.stopPropagation()
  if (event.touches) {
    target = event.touches[0]
  } else {
    target = event || window.event
  }
  var sliderLeft = target.clientX - 45
  var fillingWidth = target.clientX - 45
  if (sliderLeft <= 0) {
    sliderLeft = 0
  }
  if (fillingWidth <= 0) {
    fillingWidth = 0
  }
  txt.innerHTML = '音量：' + parseInt(sliderLeft / 135 * 100)
  innerpro.style.left = sliderLeft + 'px'
  filling.style.width = fillingWidth + 5 + 'px'
  // console.log('鼠标的位置：X=>' + target.clientX + ', Y=>' + target.clientY)
  // console.log('滑块的位置：' + sliderLeft)
}
function fillingMove (event) {
  /* addEventListener属性IE9.0才支持 */
  if (document.addEventListener) {
    innerpro.addEventListener('touchmove', sliderMove, {passive: true}, false)
    document.addEventListener('mousemove', sliderMove, false)
    document.addEventListener('mouseup', clear, false)
  } else if (document.attachEvent) {
    innerpro.attachEvent('touchmove', sliderMove, {passive: true}, false)
    document.attachEvent('mousemove', sliderMove, false)
    document.attachEvent('mouseup', clear, false)
  }
}
function sliderMove (event) {
  if (event.touches) {
    target = event.touches[0]
  } else {
    target = event || window.event
  }
  // console.log('鼠标的位置：X=>' + target.clientX + ', Y=>' + target.clientY)
  var prolong = target.clientX - 45
  if (prolong < 0) {
    prolong = 0
  } else if (prolong > 135) {
    prolong = 135
  }
  txt.innerHTML = '音量：' + parseInt(prolong / 135 * 100)
  filling.style.width = prolong + 5 + 'px'
  innerpro.style.left = prolong + 'px'
}
function clear () {
  if (document.addEventListener) {
    document.removeEventListener('mousemove', sliderMove, false)
    document.removeEventListener('mousedown', fillingMove, false)
  } else if (document.attachEvent) {
    document.attachEvent('mousemove', sliderMove, false)
    document.attachEvent('mousedown', fillingMove, false)
  }
}
window.onload = function () {
  staticProgress()
  dvnamicprogress()
}
