const express = require('express')
const {log2console, axios_get, axios_post, axios_put, axios_delete} = require('./auxiliaryFunctions')
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

router.post('/addTodo', (req, res) => {
    
    axios_post(
        '/tarefas', 
        req.body, 
        (resp) => {
            log2console(req, 200, "Post request complete")
            res.sendStatus(200)
        },
        (err) => {
            log2console(req, 400, "Bad Post request ")
            res.sendStatus(400)
        }
    )

    
})

router.put('/finishTodo/:id', async (req, res) => {
    let id = req.params.id

    let data = await axios_get('/tarefas/' + id)

    data.state = 'Finished'


    if(data != undefined){
        axios_put(
            '/tarefas/' + id,
            data,
            (resp) => {
                log2console(req, 200, "State to finished")
                res.sendStatus(200)
            },
            (err) => {
                log2console(req, 404, "To-Do does not exist")
                res.sendStatus(404)
            }
        )
    }
})

router.put('/cancelTodo/:id', async (req, res) => {
    let id = req.params.id

    let data = await axios_get('/tarefas/' + id)

    data.state = 'Canceled'


    if(data != undefined){
        axios_put(
            '/tarefas/' + id,
            data,
            (resp) => {
                log2console(req, 200, "State to canceled")
                res.sendStatus(200)
            },
            (err) => {
                log2console(req, 404, "To-Do does not exist")
                res.sendStatus(404)
            }
        )
    }
})

router.delete('/deleteTodo/:id', (req, res) => {
    let id = req.params.id

    axios_delete(
        '/tarefas/' + id,
        (resp) => {
            log2console(req, 200, "To-Do deleted")
            res.sendStatus(200)
        },
        (err) => {
            log2console(req, 404, "To-Do does not exist")
            res.sendStatus(404)
        }
    )
    
})

module.exports = router