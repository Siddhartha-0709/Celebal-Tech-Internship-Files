import http from 'http';

http.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})
