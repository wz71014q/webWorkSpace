// async function asyncPrint(name) {
//   await console.log('begin' + name);
//   await timer();
//   console.log('end' + name);
//   return 'middle';
// }
// async function timer() {
//   await Promise.reject('error');
// }
// asyncPrint('goog')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// timer()
//   .then((res) => {
//     console.log(res);
//     console.log('timeout');
//   })
//   .catch((e) => { console.log('error' + e); });

async function* gen() {
  yield 'hello';
  yield 'world';
}
const genObj = gen();
genObj.next().then(x => console.log(x));
