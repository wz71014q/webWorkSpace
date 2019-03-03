document.write('<h1>Hello world</h1>');
document.write('<h1>Hello world</h1>');
document.write('<h1>Hello world</h1>');
const ele = document.createElement('div');
ele.setAttribute('id', 'ele');
ele.innerHTML = 'test11111';
document.body.appendChild(ele);
if (module.hot) {
  module.hot.accept();
}
