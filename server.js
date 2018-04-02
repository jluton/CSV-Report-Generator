const fs = require('fs');
const { parse } = require('url');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/client'));

app.get('/report', (req, res) => {
  const data = extractDataFromRequest(req);
  const csvRows = generateCSVRows(data);
  writeCSV(csvRows)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw new Error(err);
    });
  // Generate csv file
  // Send csv file to client
  res.sendStatus(200);
});

const generateCSVRows = function (data) {
  const csvRows = [];
  const categories = Object.keys(data).filter(key => key !== 'children');
  csvRows.push(categories.join(', '));

  const writeRow = function (object) {
    const row = categories.map(cat => object[cat]);
    csvRows.push(row.join(', '));
    if ("children" in object) {
      object.children.forEach(child => writeRow(child));
    }
  }

  writeRow(data);
  return csvRows.join('\n');
};

const writeCSV = function (csvRows) {
  return new Promise((resolve, reject) => {
    fs.writeFile('data.csv', csvRows, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('OK');
      }
    });
  });
};

const extractDataFromRequest = function (req) {
  const encodedQuery = parse(req.url).query;
  const decodedQuery = decodeURIComponent(encodedQuery);
  return JSON.parse(decodedQuery);
};

app.listen(PORT, () => console.log('Example app listening on port 3000!'));