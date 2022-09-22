var http = require("http");
http.createServer((req, res) => {
    //thiết lập trả về của respone: HTML
    res.setHeader("application-header", "text/html");
    res.write("<h1 style='color:red;'>1644 - Cloud Computing</h1>");
    res.write("<h2 style='font-style: italic;'>Fall 2022</h2>");
    res.write("<h3 style='text-decoration: underline;'>Univerity of Greenwich (Vietnam)</h3>");
    res.write("<img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1'>")
    res.end();
})
.listen(80, () => {
    console.log("http://localhost");
});
//80: là cổng http mặc định => khi chạy chỉ cần gõ localhost