let zipObj = {};
const array = ['a', 'b', ['c', 'd']];
(function addPath(obj) {
  console.log('obj' + obj);
  console.log('souce' + souce);
  souce.forEach((item, index) => {
    console.log(item);
    console.log(item.length);
    if (item.length === 1) {
      zipObj[index] = 'foo';
    } else if (item.length !== 0) {
      zipObj[index] = 'goo';
      addPath(item);
    }
  });
}(zipObj));

console.log(zipObj);

function convert(list) {
  const res = [];
  const map = list.reduce((res, v) => (res[v.id] = v, res), {});
  console.log(map);
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}
console.log(convert(list));

