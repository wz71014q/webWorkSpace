Promise.resolve('foo')
  .then(string => new Promise(((resolve, reject) => {
    reject(new Error(string + ' error!!!!!'));
  })))
  .then((string) => {
    string += 'baz';
    console.log(string);
    return string;
  })
  .then((string) => {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                'a promise in the prior then so the sequence may be a bit ' +
                'surprising');
    console.log(string);
  })
  .catch((err) => {
    console.log(err);
  });
