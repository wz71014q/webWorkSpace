process.nextTick(() => {
  console.log('nextTick1延迟执行1');
});
process.nextTick(() => {
  console.log('nextTick1延迟执行2');
});
setImmediate(() => {
  console.log('setImmediate1延迟执行');
  process.nextTick(() => {
    console.log('nextTick延迟执行3');
  });
});
setImmediate(() => {
  console.log('setImmediate2延迟执行');
  process.nextTick(() => {
    console.log('nextTick延迟执行4');
  });
});
console.log('正常执行');
