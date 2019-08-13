import './index.html';

// TODO: Date对象
function setCookie(name, age) { // js操作cookie，每次只能添加一项数据
  document.cookie = `name=${name}`;
  document.cookie = `age=${age}`;
}
function getCookie() {
  return document.cookie;
}
// 删除cookie，只需要设置过期时间为小于现在的UTC时间的字符串
function deleteCookie(val) {
  const nowDate = +new Date();
  console.log(new Date(nowDate - 60000).toUTCString());
  document.cookie = `${val}=; expires=${new Date(nowDate - 60000).toUTCString()}`;
}
setCookie('Tom', '15');
// deleteCookie('name');
console.log(getCookie());

// encodeURIComponent用于对用户的输入进行编码，可以初步防止注入攻击
console.log(encodeURIComponent('name=tom&age=18'));