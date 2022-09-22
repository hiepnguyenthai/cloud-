//1. khai báo module http để chạy wed server
const http = require("http");
//var http = require("htpp")

//2. khai báo host name (optianal)
const host = "localhost";

//3. khai báo server port
const port = 5000;
//Note: có thể chọn cổng bất kỳ

//4. tạo wed server
const wed = http.createServer((req, res) => {
    res.end("This is a tutorial about NodeJS");
});

//5. chạy server trên port (listen port)
wed.listen(port, () => {
    //console.log("Server is listening port" + port);
    //console.log("Server is running at address: http://" + host + ":" + port);
    console.log("http://localhost:" + port);
});

