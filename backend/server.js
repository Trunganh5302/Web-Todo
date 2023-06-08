const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(cors());

let port = process.env.PORT || 8080;

app.post('/api/data', (req, res) => {
  const { data } = req.body;

  if (typeof data === 'object') {
    try {
      const jsonData = JSON.stringify(data);
      console.log(jsonData)
      fs.writeFile('./src/data/data.json', jsonData, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Failed to save data' });
        } else {
          res.json({ message: 'Data saved successfully' });
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
