var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunoController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/alunos')
});


router.get('/alunos', (req, res, next) => {
  res.render('alunos', {title: "PRI2020"})
})

router.get('/alunos/all', (req, res) => {
  
  Aluno.list()
    .then(dados => {
      res.send(dados)
    })
    .catch(err => {
      res.render('error', {error: e})
    })

})

router.get('/alunos/query/:q', (req, res) => {
  
  let q = req.params.q

  Aluno.lookUpRegex(q)
    .then(dados => {
      res.send(dados)
    })
    .catch(err => {
      res.render('error', {error: e})
    })

})

router.get('/alunos/:id', (req, res) => {
  let id = req.params.id

  Aluno.lookUp(id)
    .then(dados => {
      res.send(dados)
    })
    .catch(err => {
      res.render('error', {error: e})
    })

})

router.delete('/alunos/delete/:id', (req, res) => {
  let id = req.params.id

  Aluno.deleteOne(id)
    .then( _ => {
      res.sendStatus(200)
    })
    .catch(_ => {
      res.sendStatus(404)
    })
})

router.post('/alunos', (req, res) => {

  let tpcsList = []


  for(let i = 0; i< 8; i++){
    if(req.fields["switch" + (i+1)] != undefined){
      tpcsList.push(1)
    } else {
      tpcsList.push(0)
    }
  }

  if(Object.keys(req.files).length == 0){
    let data = {
      "Número": req.fields.numero,
      "Nome": req.fields.nome,
      "Sexo": req.fields.sexo,
      "Git": req.fields.git,
      "tpcs": tpcsList,
      "Avatar" : null
    }

    Aluno.insert(data)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => {
        console.log(e.params)
        res.sendStatus(500)
      })

  } else {
    console.log(req.files['avatar'])
    let data = {
      "Número": req.fields.numero,
      "Nome": req.fields.nome,
      "Sexo": req.fields.sexo,
      "Git": req.fields.git,
      "tpcs": tpcsList,
      "Avatar" : req.files['avatar'].path.split('/')[req.files['avatar'].path.split('/').length - 1]
      
    }

    Aluno.insert(data)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(_ => {
        res.sendStatus(500)
      })
  
  }
    
})

router.put('/alunos/:id', (req, res) => {

  let tpcsList = []
  let id = req.params.id

  for(let i = 0; i< 8; i++){
    if(req.fields["switch" + (i+1)] != undefined){
      tpcsList.push(1)
    } else {
      tpcsList.push(0)
    }
  }

  if(Object.keys(req.files).length == 0){
    let data = {
      "Número": req.fields.numero,
      "Nome": req.fields.nome,
      "Sexo": req.fields.sexo,
      "Git": req.fields.git,
      "tpcs": tpcsList
    }

    Aluno.updateOne(id, data)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => {
        console.log(e.params)
        res.sendStatus(500)
      })

  } else {
    console.log(req.files['avatar'])
    let data = {
      "Número": req.fields.numero,
      "Nome": req.fields.nome,
      "Sexo": req.fields.sexo,
      "Git": req.fields.git,
      "tpcs": tpcsList,
      "Avatar" : req.files['avatar'].path.split('/')[req.files['avatar'].path.split('/').length - 1]
      
    }

    Aluno.updateOne(id, data)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(_ => {
        res.sendStatus(500)
      })
  
  }
    
})


module.exports = router;
