const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('./queries');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// mongo
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connect;
connection.once('opne', () => {
  console.timeLog("MongoDb Connected")
})

// app.get('/products/:category', db.getProductByCategory);
app.get('/products', db.getAllProduct);
app.post('/import_data', db.importData);

// // Serve any static files
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// // Handle React routing, return all requests to React app
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});