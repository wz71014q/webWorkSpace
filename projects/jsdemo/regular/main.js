import './index.html';

const str = '{23(4{523}5)[235]';

// 检测括号是否成对
function isMatch(str) {
  let result;
  const strArray = str.split('');
  const tempArr = [];
  for (let i = 0; i < strArray.length; i += 1) { // 遍历括号，存入数组
    if (/[\(\{\[\]\}\)]/.test(strArray[i])) {
      tempArr.push(strArray[i]);
    }
  }
  if (!(tempArr.length & 1)) { // 不是偶数返回false
    result = validBraces(tempArr.join(''));
  } else {
    result = false;
  }
  return result;
}
// 检查字符串，将所有成对括号替换为空字符串，就是删除。再检查剩下的字符串，如果最终长度大于0，表示还有未成对的括号，即false
function validBraces(braces){
  while(/\(\)|\[\]|\{\}/g.test(braces)){
    braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
  }
  return !braces.length;
}

console.log(isMatch(str));

// https://segmentfault.com/a/1190000007173074