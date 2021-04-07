/**
 * @function isType 判断数据类型
 * @param {*} data 需要检测的数据
 * @param {*} type 期望数据类型
 * @return {Boolean} 是否是期望数据类型
 */
function isType(data, type) {
  const typeObj = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object HTMLDivElement]': 'dom',
    '[object WeakMap]': 'weakMap',
    '[object Window]': 'window',
    '[object Error]': 'error',
    '[object Arguments]': 'arguments'
  };
  const name = Object.prototype.toString.call(data);
  const typeName = typeObj[name] || 'Unknown Type';
  return typeName === type;
}

/**
 * @function deepCopy 深拷贝
 * @param {*} obj 源数据
 * @return {*} 复制结果
 */
function deepCopy(obj) {
  let result;
  if (!isType(obj, 'object') && !isType(obj, 'array')) {
    return obj;
  }
  if (isType(obj, 'array')) {
    result = [];
    obj.forEach((value) => {
      result.push(deepCopy(value));
    });
    return result;
  }
  result = {};
  for (let prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result[prop] = deepCopy(obj[prop]);
    }
  }
  return result;
}

/**
 * @param { String } reqVersion 请求版本
 * @param { String } curVersion 当前业务最新版本
 * @param { String } versionStore 版本库
 * @returns 可以在版本库中匹配到的最新版本号
 */
function getLatestVersion(reqVersion, curVersion, versionStore) {
  if (!reqVersion) {
    return curVersion;
  }
  const reqVersionArr = reqVersion.split('.');
  if (reqVersionArr.length < 3) {
    return curVersion;
  }
  let ver;
  let tens = parseInt(reqVersionArr[1], 10);
  for (let i = parseInt(reqVersionArr[0], 10); i >= 1; i--) {
    for (let j = parseInt(reqVersionArr[1], 10); j >= 0; j--) {
      for (let k = parseInt(reqVersionArr[2], 10); k >= 0; k--) {
        if (tens !== j) {
          tens = j;
          k = 9;
        }
        ver = `${i}.${j}.${k}`;
        if (versionStore[ver] !== undefined) {
          return ver;
        }
      }
    }
  }
  return curVersion;
}

/**
 * @function multiplyOrdivide
 * @param { Number } m 被乘数/被除数
 * @param { Number } n 乘数/除数
 * @param { Boolean } multiply true是乘法, false是除法
 * @returns { Number } 运算结果
 * @description 浮点数乘除运算，注意该处运算小数点最多1位，且计算值较小，暂时不考虑JS最大整数的情况
 */
function multiplyOrdivide(m, n, multiply = true) {
  if (Number(m).toString() === 'NaN' || Number(n).toString() === 'NaN') {
    return '';
  }
  const mTimes = this.isFloatNumber(m) ? `${m}`.split('.')[1].length : 0;
  const nTimes = this.isFloatNumber(n) ? `${n}`.split('.')[1].length : 0;
  const timesAll = 10**(mTimes + nTimes);
  const timesDiff = 10**(nTimes - mTimes);
  const intM = parseFloat(m) * 10**(mTimes);
  const intN = parseFloat(n) * 10**(nTimes);
  if (multiply && intM * intN >= Number.MAX_SAFE_INTEGER) {
    return (Number(m) * Number(n)).toFixed(2);
  }
  const result = multiply ? (intM * intN) / timesAll : (intM / intN) * timesDiff;
  return result;
}
module.exports = {
  isType,
  deepCopy,
  getLatestVersion,
  multiplyOrdivide
};
