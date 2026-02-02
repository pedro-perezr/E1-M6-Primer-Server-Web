const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola Mundo!');});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`Server ejecutado en http://localhost:${PUERTO}`);
});