// import mongooese, { Schema } from 'mongoose';

const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductSchema = new Schema({
  productName: { type: String, required: true, trim: true },
  description: { type: String },
  barCodeNumber: { type: String },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  unitType: { type: String },
  unit: { type: Number },
  origin: { type: String },
  productionDate: { type: Date },
  labels: { type: Array },
  saved: { type: Boolean },
  rating: { type: Number },
  photos: { type: Array },
  brandName: { type: String },
  Remarks: { type: String },
}, {
  timestamps: true,
});

const Product = mongooese.model('Product', ProductSchema);

module.exports = Product;