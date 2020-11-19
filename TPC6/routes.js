const express = require('express')
const {log2console, axios_get} = require('./auxiliaryFunctions')
const router = express.Router()

router.get('/', async (req, res) => {

    let supervisors = await axios_get('/supervisores')


    if(supervisors != undefined){
        res.render('index.pug', {
            supervisors: supervisors
        })
    
        log2console(req, 200, 'Page sent')

    } else {
        res.sendStatus(404)
        log2console(req, 404, 'Error rendering index page')

    }
})

module.exports = router