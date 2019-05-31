const http = require('http');
const { URL } = require('url');

const server = http.createServer(function (req, res) {
    const query = new URL(req.url, 'http://localhost/').searchParams;
    const a = Number(query.get('a'));
    const b = Number(query.get('b'));
    res.end(String(a + b));
});

server.listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
});