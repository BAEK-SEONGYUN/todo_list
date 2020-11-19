const http = require('http');

const server = http.createServer(async (req, res) => {
const fs = require('fs').promises;

   
    try{
         //html인지 문자열인지 구분 못하는 애들 방지 예를들어 사파리, charsest=utf-8 -> 한글 알아먹으라고
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
        const data = await fs.readFile('./server2.html');
        res.end(data);
    }
    catch(error){
        console.log(error);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
    // res.write('<h1>Hello Node!</h1>');
    // res.write('<p>Hello server</p>');
    // res.end('<p>Hello ZeroCho</p>');

    

})
    
    .listen(8080);

    server.on('listening', () =>{
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });

    server.on('error',(error) => {
        console.error(error);
    });