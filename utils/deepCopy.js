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
    '[object Date]': 'date', // Object.prototype.toString.call(new Date())
    '[object RegExp]': 'regExp',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
    '[object WeakMap]': 'weakMap',
    '[object Window]': 'window', // Object.prototype.toString.call(window)
    '[object Error]': 'error', // new Error('1')
    '[object Arguments]': 'arguments',
  };
  let name = Object.prototype.toString.call(data); // 借用Object.prototype.toString()获取数据类型
  let typeName = typeObj[name] || '未知类型'; // 匹配数据类型
  return typeName === type; // 判断该数据类型是否为传入的类型
}
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
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result[prop] = deepCopy(obj[prop]);
    }
  }
  return result;
}

export default deepCopy;