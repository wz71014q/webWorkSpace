function initCanvas () {
  var wrap = document.getElementById('circle')
  var context = wrap.getContext('2d')
  context.lineWidth = 5
  context.strokeStyle = '#00ff00'

  context.beginPath()
  context.arc(100, 100, 30, 0, 0.5 * Math.PI) // 这里的弧度正方向是顺时针，画图是默认的方向，即顺时针
  context.stroke()

  context.beginPath()
  context.arc(200, 200, 30, 0, 0.5 * Math.PI, false) // 这里的弧度正方向是顺时针，画图是顺时针
  context.stroke()

  context.beginPath()
  context.arc(300, 300, 30, 0, 0.5 * Math.PI, true) // 这里的弧度正方向是顺时针，画图是逆时针
  context.lineWidth = 5
  context.strokeStyle = '#00ff00'
    // context.closePath()
  context.stroke()
  context.fillStyle = '#0000ff'
  context.fill()

  context.beginPath()
  context.arc(380, 300, 30, 0, 0.5 * Math.PI, true)
  context.lineWidth = 5
  context.strokeStyle = '#00ff00'
  context.closePath()
  // context.stroke()
  context.fillStyle = '#0000ff'
  context.fill()
  loading(load)
}

function loading (fn) {
  var wrap = document.getElementById('circle')
  var context = wrap.getContext('2d')
  for (var i = 1; i <= 10; i++) {
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = '#ff0000'
    context.arc(110 * i, 450, 50, 0, (i / 10) * 2 * Math.PI, false)
    context.stroke()
    if (i === 10) {
      if (fn) {
        fn()
      }
    }
  }
}

function load () {
  var wrap = document.getElementById('circle')
  var context = wrap.getContext('2d')
  for (var i = 1; i <= 10; i++) {
    context.beginPath()
    context.lineWidth = 6
    context.strokeStyle = '#eee000'
    context.arc(110 * i, 600, 50, 0, (i / 10) * 2 * Math.PI, true)
    context.stroke()
  }
}

window.onload = function () {
  initCanvas()
}
