const { fstat } = require('fs');
const http = require('http');
const fd = require('fs').promises;

const users = {};   //데이터 저장용

http.createServer(async (req, res)=>{
    try {
        if(req.url ==='/'){
            const data = await fs.readFile('./restFront.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
            
        }
    } catch (err) {
        
    }
}) 