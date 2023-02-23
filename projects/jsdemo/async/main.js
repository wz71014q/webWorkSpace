import './index.html';

function myGenerator(gen) {
  if (!gen) {
    return;
  }
  return new Promise((resolve, reject) => {
    const it = gen();
    function step(next) {
      if (next.done) {
        return resolve(next.value);
      } else {
        Promise.resolve(next.value).then(res => {
          return step(it.next(res));
        }, (e) => {
          return step(it.throw(e));
        })
      }
    }
    step(it.next());
  });
}
