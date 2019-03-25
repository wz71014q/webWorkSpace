import './index.html';
import './style.css';

const imgSource = require('./ic_back.jpg');

let img = document.createElement('img');
img.setAttribute('src', imgSource);
document.getElementById('app').appendChild(img);
