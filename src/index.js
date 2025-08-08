const http = require('http');

const port = process.env.PORT || 3000;

function app(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World!');
}

if (require.main === module) {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;


