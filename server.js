const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs')
const os = require('os');
require('dotenv').config(); 


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

});

server.listen(port, hostname, () => {

    getOSInfo().then((osInfo) => {
        fs.appendFile(process.env.FILE_PATH + 'infoFile1.txt',  JSON.stringify(osInfo) , function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    })   
})


async function getOSInfo(){

    return os.cpus()
}
