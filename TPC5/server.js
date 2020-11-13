var http = require('http')
var fs = require('fs')
var axios = require('axios')

// Server Port.
const port = 3001

/*
    @param {ResponseObject} res
    @param {String(HTML)} content
    @param {String(MIME type)} content_type
    @param {Int} status_code
*/
const send_response = (res ,content, content_type, status_code = 200) => {
    res.writeHead(status_code, {'Content-Type': content_type})
    res.end(content)
}

/*
    @param {RequestObject} req
    @param {Int} resp_code
    @param {String} message
    @param {String} refers
*/
const log2console = (req, resp_code, message, refers = "") => {
    req.method = "\033[1;37m" + req.method + "\033[0m"

    resp_code = resp_code >= 200 && resp_code < 300 ? "\033[0;32m" + resp_code + "\033[0m" : (resp_code >= 300 && resp_code < 400 ? "\033[0;34m" + resp_code + "\033[0m" : "\033[0;31m" + resp_code + "\033[0m")
    
    console.log("\033[0;34m" + refers + "\033[0m " + req.method + " " + resp_code + " " + req.url + " " + message + " | " + new Date().toISOString().replace('T', ' ').replace('/\..+/', ''))
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
                    // Possível mudança para um .html de erro.
                    send_response(res, "Internal Server Error", "text", 500)
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
                    send_response(res, "", "text/css", 404)
                },
                () => {
                    log2console(req, 200, "Stylesheet sent", "referer" in req.headers ? `\t--` : "")
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
                    send_response(res, "", "image", 404)
                },
                () => {
                    log2console(req, 200, "Image sent", "referer" in req.headers ? `\t--` : "")
                } 
            )

        } else if(req.url == '/favicon.ico'){

            // Ignore for now.

        }
        else {
            
            log2console(req, 404, "Page not found")

            resp_file(
                "sites/error.html",
                res,
                'text/html',
                (err) => {
                    send_response(res, "Internal server error", "text", 500)
                    log2console(req, 500, "error.html not found", `\t--`)
                },
                () => {
                    log2console(req, 200, "error page sent", `\t--`)
                } 
            )

        }
    }
})

servidor.listen(port)

console.log("Server listening at port " + "\033[1;37m" + port + "\033[0m" + "!\n")