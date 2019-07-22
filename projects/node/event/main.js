// import './index.html';

const fs = require('fs');
const zlib = require('zlib');

const fileReadStream = fs.createReadStream('data.json');
const fileWriteStream = fs.createWriteStream('data.json.gz');

// let count = 0;
fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream);
// fileReadStream.on('data', (chunk) => {
//   console.log(`${++count}, 接收到: ${chunk.length}`);
//   fileWriteStream.write(chunk);
//   fileReadStream.pipe(fileWriteStream);
// });
fileReadStream.on('end', () => {
  console.log('结束');
});

