const http = require('http');
const Promise = require('bluebird');

const goodHttp = {};

goodHttp.get = (url, debug) => {
    return new Promise((resolve, reject) => {
        http.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                if (debug) console.log(data);
                resolve(data);
            });

        }).on('error', (err) => {
            if (debug) console.log(err);
            reject(err);
        });
    });
};

module.exports = goodHttp;
