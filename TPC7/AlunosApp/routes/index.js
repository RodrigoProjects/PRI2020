var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunoController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/alunos')
});


router.get('/alunos', (req, res, next) => {
  Aluno.list()
    .then(dados => {
      res.render('alunos', {alunos : dados})
    })
    .catch(err => {
      res.render('error', {error: e})
    })
})

module.exports = router;
