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
  out.addEventListener('click', fillingClick, false)
  innerpro.addEventListener('touchstart', fillingMove, {passive: true}, false)
  innerpro.addEventListener('mousedown', fillingMove, false)
  // txt.addEventListener('click', stopProp, false)
  // txt.addEventListener('mousemove', stopProp, false)
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
  filling.style.width = fillingWidth + 'px'
  // console.log('鼠标的位置：X=>' + target.clientX + ', Y=>' + target.clientY)
  // console.log('滑块的位置：' + sliderLeft)
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
  // console.log('鼠标的位置：X=>' + target.clientX + ', Y=>' + target.clientY)
  var prolong = target.clientX - 45
  if (prolong < 0) {
    prolong = 0
  } else if (prolong > 135) {
    prolong = 135
  }
  txt.innerHTML = '音量：' + parseInt(prolong / 135 * 100)
  filling.style.width = prolong + 'px'
  innerpro.style.left = prolong + 'px'
}
function clear () {
  document.removeEventListener('mousemove', sliderMove, false)
  document.removeEventListener('mousedown', fillingMove, false)
}
// function stopProp (event) {
//   event.stopPropagation()
// }
window.onload = function () {
  staticProgress()
  dvnamicprogress()
}
