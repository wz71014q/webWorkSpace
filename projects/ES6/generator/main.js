function* getHello() {
  yield 'hello';
  yield* getWorld();
  yield 'world';
  return 'ending';
}
function* getWorld() {
  yield 'yield* 用来调用另一个Generator方法';
  yield '相当于将另一个Generator方法插入yield*位置';
}
function* getVal(x, y, z) {
  let result = x + y + z;
  yield x + y;
  yield y + z;
  return result;
}
const addVal = getVal(1, 2, 3);
for (let n of getHello()) {
  console.log(n);
}
console.log(addVal.next());
console.log(addVal.next());
console.log(addVal.next());
