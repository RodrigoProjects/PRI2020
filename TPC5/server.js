var http = require('http')
var fs = require('fs')
var axios = require('axios')

// Server Port.
const port = 3001

/*
    @param {ResponseObject} res
    @param {String(HTML)} content
    @param {String} MIME type
*/
const send_response = (res ,content, content_type) => {
    res.writeHead(200, {'Content-Type': content_type})
    res.end(content)
}

/*
    @param {String} head
    @param {String} content
*/
const log2console = (req, resp_code, message) => {
    req.method = "\033[1;37m" + req.method + "\033[0m"

    resp_code = resp_code >= 200 && resp_code < 300 ? "\033[0;32m" + resp_code + "\033[0m" : (resp_code >= 300 && resp_code < 400 ? "\033[0;34m" + resp_code + "\033[0m" : "\033[0;31m" + resp_code + "\033[0m")
    
    console.log(req.method + " " + resp_code + " " + req.url + " " + message + " | " + new Date().toISOString().replace('T', ' ').replace('/\..+/', ''))
}

/*  
    | Reads a file and sends it via HTTP changing the Content type to the provided MIME type.
    @param {String} filename
    @param {ResponseObject} res
    @param {String} MIME type
    @param {Function()} success
    @param {Function(err)} error
*/
const resp_file = (
    filename, 
    res,
    mime_type, 
    error = (err) => {console.log(err)}, 
    success = () => {}
) => {
    fs.readFile(filename, (err, data) => {
        if(err){
            error(err)
        } else {
            send_response(res, data, mime_type)
            success()
        }
    })
}

// -----------------------------------------------------------------------

// -------------------------------- SERVER -------------------------------

var servidor = http.createServer( (req, res) => {

    if(req.method == 'GET'){
        if(req.url == '/'){

            resp_file(
                "sites/index.html",
                res,
                'text/html',
                (err) => {
                    log2console(req, 500, "Internal server error")
                },
                () => {
                    log2console(req, 200, "Page sent")
                } 
            )

        } 
        else if(req.url == '/alunos'){

        }
        else if(req.url == '/instrumentos'){

        }
        else if(req.url == '/cursos'){
            
        } 
        else if(req.url.match(/\/styles\/.*/)){

            resp_file(
                'sites/styles/' + req.url.split('/')[2],
                res,
                'text/css',
                (err) => {
                    log2console(req, 404, "Stylesheet not found")
                },
                () => {
                    log2console(req, 200, "Stylesheet sent")
                } 
            )

        }
        else if(req.url.match(/\/imgs\/.+/)){
            
            resp_file(
                'sites/imgs/' + req.url.split('/')[2],
                res,
                'image',
                (err) => {
                    log2console(req, 404, "Image not found")
                },
                () => {
                    log2console(req, 200, "Image sent")
                } 
            )

        }
        else {
            send_response(res, '<center><h1>Page not Found!</h1></center>', 'text/html')
            log2console(req, 404, "Resource not found!")
        }
    }
})

servidor.listen(port)

console.log("Server listening at port " + port + "!\n")