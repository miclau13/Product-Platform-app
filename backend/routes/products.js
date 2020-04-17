const csvtojson = require("csvtojson");
const formidable = require('formidable');
const fs = require('fs');
const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  const productName = req.query.name;
  if (productName) {
    const regex = new RegExp(".*" + productName + ".*", "i");
    Product.find({ productName: {$regex: regex }})
    .then(products => res.json(products))
    .catch(error => res.status(400).json('Error: ' + error));
  } else {
    Product.find()
      .then(products => res.json(products))
      .catch(error => res.status(400).json('Error: ' + error));
  }
});

router.route('/add').post((req, res) => {
  const producInfo = req.body;
  const newProduct = new Product(producInfo);

  newProduct.save()
    .then(() => res.json('Product Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  const productId = req.params.id;
  const { productName, category, price, origin, labels, rating, productionDate } = req.body;
  Product.findById(productId)
    .then(product => {
      product.productName = productName;
      product.category = category;
      product.price = price;
      product.origin = origin;
      product.labels = labels;
      product.rating = Number(rating);
      product.productionDate = Date.parse(productionDate);

      product.save()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error: ' + error));
    })
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