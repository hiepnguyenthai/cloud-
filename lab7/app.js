const express = require("express");
const app = express();
const app = require("path");
const port = process.env.PORT || 3000;

//cấu hình views & view engine
app.use("views", path.join(__dirname, "/views"));
app.use("view engine", "hbs");

//kết nối database
const mongoose = require("mongoose");
const MobileModel = require("./module/MobileSchema");
const url = "mongodb://localhost:27017/demo"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("DB connect error: " + err)
    } else {
        //console.log("Connect to DB succeed !");
        app.get("/", (req, res) => {
            MobileModel.find((err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });
  }
});

//chạy server
app.listen(port);
