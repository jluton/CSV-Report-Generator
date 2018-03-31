const express = require('express')
const app = express()

const PORT = 3000;

app.use(express.static(__dirname + './client'));

app.get('/report', (req, res) => {
  // Generate csv file
  // Send csv file to client
});

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

const generateCSV = function (reportObj) {
  
};