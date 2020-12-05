var express = require('express');
var router = express.Router();
var multer = require('multer')

var upload = multer({dest: 'uploads/'})

var fs = require('fs')
var jsonfile = require('jsonfile')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/files')
});

router.get('/files', function(req, res, next) {
  res.render('fileList', { title: 'Gestor de Ficheiros' });
});

router.get('/files/all', (req, res) => {

  let files = jsonfile.readFileSync('filesDB.json')
  res.send(files)

})

router.post('/files', upload.array('ficheiro'), (req, res) => {
  console.log("Im here")
  for(let i = 0; i < req.files.length; i++){
    console.log(req.files[i])
  }

  res.sendStatus(200)
})

module.exports = router;
