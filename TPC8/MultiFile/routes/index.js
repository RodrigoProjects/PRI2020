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

  let files = jsonfile.readFile('filesDB.json')
    .then(data => res.send(data))

})

router.post('/files', upload.array('ficheiro'), (req, res) => {
  
  let d = new Date().toISOString().substr(0,19).replace('T', ' ')
  let db = jsonfile.readFileSync('filesDB.json')

  for(let i = 0; i < req.files.length; i++){

    let oldPath = __dirname + "/../" + req.files[i].path
    let newPath = __dirname + '/../public/fileStore/' + req.files[i].originalname
    
    fs.renameSync(oldPath, newPath, (e) => {
      if(e) throw e
    })

    if(Array.isArray(req.body.descricao)){
      
      var data = {
        size: req.files[i].size,
        filename: req.files[i].originalname,
        timestamp: d,
        type: req.files[i].mimetype,
        descricao: req.body.descricao[i]
      }

    } else {

      var data = {
        size: req.files[i].size,
        filename: req.files[i].originalname,
        timestamp: d,
        type: req.files[i].mimetype,
        descricao: req.body.descricao
      }

    }
    
    db.push(data)

  }

  jsonfile.writeFile('filesDB.json', db)
      .then((_) => {
        res.sendStatus(200)
      })
      .catch(e => {
        throw e
      })
  
})

router.get('/files/download/:fname', (req, res) => {
  res.download('public/fileStore/' + req.params.fname)
})

module.exports = router;
