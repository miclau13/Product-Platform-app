const csvtojson = require("csvtojson");
const formidable = require('formidable');
const fs = require('fs');
const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const producInfo = req.body;
  const newProduct = new Product(producInfo);

  newProduct.save()
    .then(() => res.json('Product Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  Product.deleteMany()
    .then(() => res.json('All Products Deleted!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/import').post((req, res) => {
  let form = new formidable.IncomingForm();
  let result = [];
  form.parse(req, function(err, fields, files) {
    fs.createReadStream(files.file.path)
      .pipe(csvtojson())
      .on('data', (data) => {
        //data is a buffer object
        const dataInJson = data.toString('utf8');
        result.push(JSON.parse(dataInJson));
      })
      .on('end', () => {
        Product.insertMany(result)
          .then(() => res.status(200).json("Import Done"))
          .catch(error => res.status(400).json('Error: ' + error))
      });
  });
});

module.exports = router;