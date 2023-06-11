const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');
const { json } = require("body-parser");

app.use(express.json());
app.use(cors());

let port = process.env.PORT || 8080;

app.post('/api/data', (req, res) => {
  const { data } = req.body;

  if (typeof data === 'object') {
    try {
      fs.readFile('./src/data/data.json', 'utf8', (err, existingData) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Failed to read data' });
        } else {
          let jsonData = [];
          if (existingData.trim() !== '') {
            jsonData = JSON.parse(existingData);
            if (!Array.isArray(jsonData)) {
              jsonData = [];
            }
          }
          jsonData.push(data);

          fs.writeFile('./src/data/data.json', JSON.stringify(jsonData), (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ message: 'Failed to save data' });
            } else {
              res.json({ message: 'Data saved successfully' });
              const name = jsonData.map((item) => item.name)
              console.log(name)
            }
          });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Invalid data format' });
    }
  } else {
    res.status(400).json({ message: 'Invalid data format' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
