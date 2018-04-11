
function drag () {
  var center = document.getElementById('center')
  center.onmousedown = client  // 获取中间盒子，按下鼠标时添加事件
}

function client (eve) {
  eve = eve || window.event  // 兼容性
  var out = document.getElementById('out')
  var disX = eve.clientX - out.offsetLeft // 鼠标点击位置跟out块的左边框距离
  var disY = eve.clientY - out.offsetTop // 鼠标点击位置跟out块的上边框距离
  document.onmousemove = function (event) {
    event = event || window.event
    mov(event, disX, disY)
    console.log('eve.clientX' + eve.clientX)
    console.log('disX' + disX)
    console.log('out.offsetLeft' + out.offsetLeft)
  }
  document.onmouseup = function () {
    document.onmousemove = null
    document.onmouseup = null // 释放鼠标时清空事件
  }
}

function mov (e, posx, posy) {
  e = e || window.event
  var out = document.getElementById('out')
  var finalLeft = e.clientX - posx // out盒子左边框距离左窗口的距离
  var finalHeight = e.clientY - posy // out盒子上边框距离上窗口的距离
  var diffWidth = document.documentElement.clientWidth - out.offsetWidth || document.body.clientWidth - out.offsetWidth  // 兼容性获取当前窗口的宽度-out盒子的宽度
  var diffHeight = document.documentElement.clientHeight - out.offsetHeight || document.body.clientWidth - out.offsetWidth  // 兼容性获取当前窗口的高度-out盒子的高度
  if (finalLeft <= 0) {
    finalLeft = 0
  }
  if (finalHeight <= 0) {
    finalHeight = 0
  }
  if (finalLeft >= diffWidth) {
    finalLeft = diffWidth
  }
  if (finalHeight >= diffHeight) {
    finalHeight = diffHeight
  }  // 设置坐标，使盒子不超出窗口
  out.style.left = finalLeft + 'px'
  out.style.top = finalHeight + 'px'
}
window.onload = drag
