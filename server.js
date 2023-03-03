const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
     const num = _.random(0,20);
    console.log(num);
    const greet = _.once(()=>{
        console.log('hello');
    });
    greet();
    greet();
    


    //set header content type
    res.setHeader('content-type','text/html');
//     res.write('<p>hello,ninjas<p>');
//     res.write('<p>hello again<p>');
//     res.end();
    switch(req.url){
        case '/':
            path = 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path = 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            
            res.statusCode = 301;
            res.setHeader('location','/about');
            res.end();
            break;    
        default:
            path = '404.html';
            res.statusCode = 404;
            break;
    }
    //send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
});