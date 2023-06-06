const express = require("express");
const app = express();
const connectDB = require("./src/data/db")


app.get("/tasks", async (req, res) => {
  // Lấy danh sách công việc từ cơ sở dữ liệu hoặc bất kỳ nguồn dữ liệu nào khác
  // Trả về danh sách công việc dưới dạng JSON
  try {
    const tasks = await categorys.findAll()
    res.json(tasks);
  } catch (error) {
   console.log(error)
   res.status(500).json({ error: "Something went wrong" }) 
  }
});

connectDB()

let port = process.env.PORT || 8080; // lấy port đã tạo trước đó
console.log("hello");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

