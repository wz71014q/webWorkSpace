import './index.html';
import Jimp from 'jimp';
import Code from './code.png';

// const upload = document.querySelector('.upload');
// const status = document.querySelector('.status');

upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  console.log('file', file);
})
Jimp.read(Code, (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write("lena-small-bw.jpg"); // save
});