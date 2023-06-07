const express = require("express");
const app = express();
const connectDB = require("./src/data/db")


connectDB()

let port = process.env.PORT || 8080; // lấy port đã tạo trước đó
console.log("hello");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

