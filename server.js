const { parse } = require('url');
const express = require('express')
const app = express()

const PORT = 3000;

app.use(express.static(__dirname + '/client'));

app.get('/report', (req, res) => {
  console.log('hello');
  const parsedURL = parse(req.url, true).query;
  const json = Object.keys(parsedURL)[0];
  console.log('json: ', json);
  console.log('type: ', typeof json);
  console.log(JSON.parse(json));
  // console.log('query: ', parsedURL.query);
  // Generate csv file
  // Send csv file to client
  res.sendStatus(200);
});

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

const generateCSV = function (reportObj) {
  
};