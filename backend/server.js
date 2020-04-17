const bodyParser = require('body-parser');
const cors = require('cors');
const csvtojson = require("csvtojson");
// const db = require('./queries');
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
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDb Connected")
});

const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);
const profilesRouter = require('./routes/profiles');
app.use('/profiles', profilesRouter);

// app.use('/', productsRouter);

// csvtojson()
//   .fromFile("Crazyee_db_template_mongo.csv")
//   .then(csvData => {
//     console.log(csvData);

//     mongoose.connect(
//       uri,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       (err, mongoDb) => {
//         if (err) throw err;
//         mongoDb.client
//           .db("test")
//           .collection("products")
//           .insertMany(csvData, (err, res) => {
//             if (err) throw err;

//             console.log(`Inserted: ${res.insertedCount} rows`);
//             mongoDb.client.close();
//             mongoDb.close();
//           });
//       }
//     );
//   });

// Postgres
// app.get('/products/:category', db.getProductByCategory);
// app.get('/products', db.getAllProduct);
// app.post('/import_data', db.importData);

// Serve any static files
app.use(express.static(path.join(__dirname, '../frontend/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});