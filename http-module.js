const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write(`<h1>This is base url</h1>`);
    res.end();
  } else if (req.url == '/home') {
    res.write(`<h1>This is home url</h1>`);
    res.end();
  } else {
    res.write(`<h1>This dont exist url</h1><a href='/'>Base</a>`);
    res.end();
  }
});

module.exports = { server };
