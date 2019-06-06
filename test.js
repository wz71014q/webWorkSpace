let zipObj = {};
const array = ['a', 'b', ['c', 'd']];
function addPath(...obj) {
  console.log('obj' + obj);
  let souce = obj.length === 0 ? array : obj;
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
}
addPath();
console.log(zipObj);
