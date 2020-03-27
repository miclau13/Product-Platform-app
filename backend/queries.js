const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
  },
});
const format = require('pg-format');

var formidable = require('formidable'), fs = require('fs');
const csv = require('csv-parse');
const stringify = require('csv-stringify');

// const getUsersByFirstName = (req, response) => {
//   const firstName = req.query.firstname;
//   pool.query(`SELECT * FROM public.ref_firstnames WHERE label like '${firstName}%' ORDER BY label ASC `, (error, results) => {
//     if (error) {
//       console.error("error", error)
//       throw error
//     }
//     // console.error("results", results)
//     response.status(200).json(results.rows)
//   })
// };

const importData = (req, res) => {
  let form = new formidable.IncomingForm();
  let incomingData = [];
  form.parse(req, function(err, fields, files) {
    fs.createReadStream(files.file.path)
      .pipe(csv({delimiter: ','}))
      .on('data', function(data){
          try {
            //perform the operation
            incomingData.push(data);
          }
          catch(err) {
              //error handler
          }
      })
      .on('end',function() {
        const values = incomingData.slice(1)
        let query = format(
          'INSERT INTO public.product (name, description, barcode_name, category, price, unit_type, unit, origin, production_date, label, saved, rating, photos, brand_name, remarks) VALUES %L returning id', values
        );
        res.status(200).json("Done");
          pool.query(query, (error, results) => {
            if (error) {
              console.error("error", error)
              throw error
            } 
          })
      });  
  });
};

module.exports = {
  getUsersByFirstName,
  uploadFile,
  importData
}