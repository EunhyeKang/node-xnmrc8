// run `node index.js` in the terminal

const path = require('path');
const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 4010;

const server = http.createServer((req, res) => {
  if (req.url.endsWith('.html')) {
    const htmlFile = req.url.slice(1);
    fs.stat(`./${htmlFile}`, (error, stats) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      if (stats) {
        console.log(
          '[Web server] The server lives on ' +
            port +
            '. the html is connnected. htmlFile name: ' +
            htmlFile +
            '.'
        );
        fs.createReadStream(htmlFile).pipe(res);
      } else {
        res.statusCode = 404;
        console.error(
          '[Web server] The server failed to listen html file on ' + port
        );
        res.end('hello world');
      }
    });
  }
});
server.listen(port, hostname, () => {
  console.log('[Web server] New server created on ' + port);
});

//TODO: Since the url is on cloud but not local the index.html should be the end of the url below
//**********use this url*********** : https://nodexnmrc8-sytc--4010.local-credentialless.webcontainer.io/index.html
