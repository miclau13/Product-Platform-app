const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
const db = require('./queries');
const port = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get('/users', db.getUsersByFirstName);
app.post('/import_data', db.importData);

// Serve any static files
app.use(express.static(path.join(__dirname, '../frontend/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});