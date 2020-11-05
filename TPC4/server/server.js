var http = require('http')
var fs = require('fs')

// Server Port.
const port = 7777

/*
    @param {ResponseObject} res
    @param {String(HTML)} content
*/
const resp_html = (res ,content) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(content)
}

/*
    @param {String} head
    @param {String} content
*/
const log2console = (head, content) => {
    console.log(head + ": " + content + " | " + new Date().toISOString().replace('T', ' ').replace('/\..+/', ''))
}

/*
    @param {String} filename
    @param {ResponseObject} res
    @param {Function()} success
    @param {Function(err)} error
*/
const resp_file_html = (filename, res, success, error) => {
    fs.readFile(filename, (err, data) => {
        if(err){
            error(err)
        } else {
            resp_html(res, data)
            success()
        }
    })
}

// -----------------------------------------------------------------------

// -------------------------------- SERVER -------------------------------

var servidor = http.createServer((req, res) => {

    log2console("REQUEST[" + req.method + "]", req.url)
    
    // Route: /arqs/{num}
    if(req.url.match(/\/arqs\/[0-9]+$/)){

        var num = req.url.split("/")[2]

        resp_file_html(
                'arqweb/arq' + num + ".html",
                res,
                () => {
                    log2console("RESPONSE[" + req.url + " | " + req.method + "]", "HTML Sent")
                },
                (err) => {
                    log2console("FILE NOT FOUND", err)
                    resp_html(res,"<center><h2>Ops! Seems like that file does not exist.</h2></center>")
                }
            )

    } // Route: /arqs/* or /arqs/
    else if(req.url.match(/\/arqs\/\*?$/)){

        resp_file_html(
            'arqweb/index.html',
            res,
            () => {
                log2console("RESPONSE[" + req.url + " | " + req.method + "]", "HTML Sent")
            },
            (err) => {
                log2console("ERROR(CRITICAL)", "Index.html is missing or " + err)
                resp_html(res, "<center><h2>Ops! Seems like this page does not exist, we will try to fix this as soon as possible.</h2></center>")
            }
        )

    } // Ignore favicon route. 
    else if(req.url == "/favicon.ico"){
        // Do nothing for now.
        
    }
    // Invalid Routes. 
    else {
        log2console("INVALID ROUTE", req.url)
        resp_html(res, "<center><h2>Invalid Route!</h2></center>")
    }
    
})

servidor.listen(port)

log2console("START", "Listening to port " + port)