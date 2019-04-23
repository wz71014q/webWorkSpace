const https = require('https');

const options = {
  hostname: 'api.douban.com',
  port: 443,
  method: 'GET',
  path: '/v2/movie/top250'
};
let requestData = '';
const request = https.request(options, (Response) => {
  console.log(Response.headers);
  Response.setEncoding('UTF8');
  Response.on('data', (chunk) => {
    requestData += chunk;
  });
  Response.on('end', () => {
    JSON.parse(requestData).subjects.map((item) => {
      console.log(item.title);
      return item;
    });
  });
});
request.on('error', (error) => {
  console.log(error);
});
request.end();
