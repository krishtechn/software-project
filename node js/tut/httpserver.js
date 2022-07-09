const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>this is Technicalkrish</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nostrum magnam, dicta officia id cum architecto soluta veritatis, ratione iusto optio commodi tempora corporis minus. Aliquid officia ea obcaecati maxime.</p>');
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})