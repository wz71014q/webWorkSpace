import Vconsole from 'vconsole';
import './index.html';
import './style.css';

const vconsole = new Vconsole(); //  eslint-disable-line

// 访问用户媒体设备的兼容方法
function getUserMedia(constrains, suc, err) {
  if (navigator.mediaDevices.getUserMedia) {
    // 最新标准API
    navigator.mediaDevices
      .getUserMedia(constrains)
      .then(suc)
      .catch(err);
  } else if (navigator.webkitGetUserMedia) {
    // webkit内核浏览器
    navigator
      .webkitGetUserMedia(constrains)
      .then(suc)
      .catch(err);
  } else if (navigator.mozGetUserMedia) {
    // Firefox浏览器
    navigator
      .mozGetUserMedia(constrains)
      .then(suc)
      .catch(err);
  } else if (navigator.getUserMedia) {
    // 旧版API
    navigator
      .getUserMedia(constrains)
      .then(suc)
      .catch(err);
  }
}

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// 成功的回调函数
function success(stream) {
  // 兼容webkit内核浏览器
  const CompatibleURL = window.URL || window.webkitURL;
  // 将视频流设置为video元素的源
  video.src = CompatibleURL.createObjectURL(stream);
  // 播放视频
  video.play();
}

// 异常的回调函数
function error(err) {
  console.log('访问用户媒体设备失败：', err.name, err.message);
}

if (
  (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ||
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia
) {
  // 调用用户媒体设备，访问摄像头
  getUserMedia(
    {
      video: { width: 480, height: 320, facingMode: { exact: 'environment' } }
    },
    success,
    error
  );
} else {
  console.log('你的浏览器不支持访问用户媒体设备');
}

// 注册拍照按钮的单击事件
document.getElementById('capture').addEventListener('click', function() {
  alert(video.src); // 此处是生成图片的url
  // 绘制画面
  context.drawImage(video, 0, 0, 480, 320);
});


