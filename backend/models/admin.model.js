const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const AdminSchema = new Schema({
  aboutUs: { type: String },
  questions: { type: Array },
  privacy: { type: String },
  terms: { type: String },
  version: { type: String },
}, {
  timestamps: true,
});

const Admin = mongooese.model('Admin', AdminSchema);

module.exports = Admin;