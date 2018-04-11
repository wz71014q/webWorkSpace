
function drag () {
  var ce = document.getElementsByTagName('div')[1]
  ce.onmousedown = client  //  获取中间盒子，按下鼠标时添加事件
}

function client (eve) {
  'use strict'
  eve = eve || window.event  // 兼容性
  var d1 = document.getElementById('d1')
  var disX = eve.clientX - d1.offsetLeft
  var disY = eve.clientY - d1.offsetTop
  document.onmousemove = function (event) {
    event = event || window.event
    mov(event, disX, disY)
  }
  document.onmouseup = function () {
    document.onmousemove = null
    document.onmouseup = null  // 释放鼠标时清空事件
  }
}

function mov (e, posx, posy) {
  e = e || window.event
  var d1 = document.getElementById('d1')
  var l = e.clientX - posx
  var h = e.clientY - posy
  var r = document.documentElement.clientWidth - d1.offsetWidth || document.body.clientWidth - d1.offsetWidth  // 兼容性获取当前窗口的宽度-d1盒子的宽度
  var b = document.documentElement.clientHeight - d1.offsetHeight || document.body.clientWidth - d1.offsetWidth  // 兼容性获取当前窗口的高度-d1盒子的高度
  if (l <= 0) {
    l = 0
  }
  if (h <= 0) {
    h = 0
  }
  if (l >= r) {
    l = r
  }
  if (h >= b) {
    h = b
  }  // 设置坐标，使盒子不超出窗口
   //   document.title=e.clientX+','+e.clientY
  d1.style.left = l + 'px'
  d1.style.top = h + 'px'
}
window.onload = drag
