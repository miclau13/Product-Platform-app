const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
  const deviceId = req.query.id;
  if (deviceId) {
    const regex = new RegExp(".*" + deviceId + ".*", "i");
    Profile.find({ deviceId: {$regex: regex }})
    .then(profiles => res.json(profiles))
    .catch(error => res.status(400).json('Error: ' + error));
  } else {
    Profile.find()
      .then(profiles => res.json(profiles))
      .catch(error => res.status(400).json('Error: ' + error));
  }
});

router.route('/add').post((req, res) => {
  const profileInfo = req.body;
  const newProfile = new Profile(profileInfo);

  newProfile.save()
    .then(() => res.json('Profile Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  const id = req.params.id;
  const { 
    deviceId,
    rating, 
    comments,
  } = req.body;
  Profile.findById(id)
    .then(profile => {
      profile.deviceId = deviceId;
      profile.comments = comments;
      profile.rating = Number(rating);

      profile.save()
        .then(profiles => res.json(profiles))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  Profile.deleteMany()
    .then(() => res.json('All Profiles Deleted!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/import').post((req, res) => {
//   let form = new formidable.IncomingForm();
//   let result = [];
//   form.parse(req, function(err, fields, files) {
//     fs.createReadStream(files.file.path)
//       .pipe(csvtojson())
//       .on('data', (data) => {
//         //data is a buffer object
//         const dataInJson = data.toString('utf8');
//         result.push(JSON.parse(dataInJson));
//       })
//       .on('end', () => {
//         Profile.insertMany(result)
//           .then(() => res.status(200).json("Import Done"))
//           .catch(error => res.status(400).json('Error: ' + error))
//       });
//   });
// });

module.exports = router;