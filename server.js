const express = require('express');
const https = require("https");
const cors = require('cors');

const app = express();

app.use(cors());

// app.use(express.static("public"));

app.get("/", function (req, res) {
 
  

  
});

app.post("/", function (req, res) {
  

});


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));