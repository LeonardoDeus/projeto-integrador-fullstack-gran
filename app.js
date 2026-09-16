const http = require('http');
const server = http.createServer((req, res) => {
  res.end('FACULDADE GRAN - Projeto Integrador - 3 Paginas OK');
});
server.listen(3000);
