const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    //html인지 문자열인지 구분 못하는 애들 방지 예를들어 사파리, charsest=utf-8 -> 한글 알아먹으라고
    
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello ZeroCho</p>');
})
    
    //프로세스에 올려야함
    //8080포트에 연결이 되면 콘솔이 실행됨
    .listen(8080);

    server.on('listening', () =>{
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });

    server.on('error',(error) => {
        console.error(error);
    });
    
    //https 는 기본적으로 포트가 443
    //http 는 80 둘다 생략가능
    //포트가 다 존재
    //포트 하나가 하나의 프로그램이라고 생각

    //내 서버를 공개하고 싶으면 여러가지 방법이 있음
    //클라우드로 컴을 빌려서 공개하는 식으로 자주함 -> 배포행위
    //위 코드는 다 비동기 에러처리를 해주는게 좋다