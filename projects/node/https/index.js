const https = require('https');
const fs = require('fs');

const PORT = 8443;

const options = {
  key: fs.readFileSync('./ca/server.key'),
  cert: fs.readFileSync('./ca/server.crt')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello World!');
})

server.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}/`);
});
