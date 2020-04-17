const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProfileSchema = new Schema({
  deviceId: { type: String },
  rating: { type: Number },
  comments: { type: String }
}, {
  timestamps: true,
});

const Profile = mongooese.model('Profile', ProfileSchema);

module.exports = Profile;