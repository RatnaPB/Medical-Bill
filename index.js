const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let bills = [];

app.get('/items', (req, res) => {
  res.json(bills);
});

app.post('/items', (req, res) => {
  const bill = {
    patientName: req.body.patientName,
    patientAddress: req.body.patientAddress,
    hospitalName: req.body.hospitalName,
    dateOfService: req.body.dateOfService,
    billAmount: req.body.billAmount
  };
  bills.push(bill);
  res.json(bill);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app