const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponse.js');
const jsonHandler = require('./jsonResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    const parseUrl = url.parse(request.url);
    const params = query.parse(parseUrl.query);
    const acceptedType = request.headers.accept.split(',')[0];

    switch (parseUrl.pathname) {
        default:
            htmlHandler.getIndex(request, response);
            break;
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
  });