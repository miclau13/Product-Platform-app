const router = require('express').Router();
let Admin = require('../models/admin.model');

router.route('/').get((req, res) => {
  Admin.find()
    .then(admin => res.json(admin))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const adminInfo = req.body;
  const newAdmin = new Admin(adminInfo);

  newAdmin.save()
    .then(() => res.json('Admin Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  const adminId = req.params.id;
  const {       
    aboutUs,
    questions,
    privacy,
    terms,
    version, 
  } = req.body;
  Admin.findById(adminId)
    .then(admin => {
      admin.aboutUs = aboutUs;
      admin.questions = questions;
      admin.privacy = privacy;
      admin.terms = terms;
      admin.version = version;

      admin.save()
        .then(admin => res.json(admin))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/delete').delete((req, res) => {
//   Admin.deleteMany()
//     .then(() => res.json('All Admin Info Deleted!'))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

module.exports = router;