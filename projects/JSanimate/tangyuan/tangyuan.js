function animation () {
  var po = 0
  var i = 0
  var holder = document.getElementById('picHolder')
  holder.onclick = function () {
    window.open('https://www.baidu.com/s?wd=%E5%85%83%E5%AE%B5%E8%8A%82&tn=SE_PclogoS_8whnvm25&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pcs', 'newwin')
    // window.open()是在新窗口打开一个链接，在本窗口打开用window.onload.href
  }
  setInterval(function () {
    po += -270
    i++
    holder.style.backgroundPositionX = po + 'px'
    if (i >= 31) {
      i = 0
      po = 270
    }
  }, 100)
}
window.onload = function () {
  animation()
}
