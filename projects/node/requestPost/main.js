const https = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
  stats: [
    {
      stats: [
        {}, {}, {}
      ]
    }
  ]
});
const options = {
  hostname: 'www.github.com',
  port: 80,
  method: 'POST',
  path: '/_private/browser/stats',
  headers: {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
    Connection: 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'text/plain',
    Cookie: '_ga=GA1.2.451848608.1553871438; _octo=GH1.1.1450947705.1553871439; logged_in=yes; dotcom_user=wz71014q; _gat=1',
    Host: 'api.github.com',
    Origin: 'https://github.com',
    Referer: 'https://github.com/wz71014q/WebWorkSpace/issues/new',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
  }
};
const request = https.request(options, (res) => {
  console.log('Status', res.statusCode);
  console.log('headers', JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(chunk);
  });
  res.on('end', () => {
    console.log('issue 提交完毕');
  });
});
request.on('error', (error) => {
  console.log(error);
});
request.write(postData);
request.end();
