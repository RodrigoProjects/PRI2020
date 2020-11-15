var http = require('http')
var fs = require('fs')
var axios = require('axios')

// utf-8 charset.
// axios.defaults.headers.common['charset'] = 'utf-8'

// Server Port.
const port = 3001

/*
    @param {ResponseObject} res
    @param {String(HTML)} content
    @param {String(MIME type)} content_type
    @param {Int} status_code
*/
const send_response = (res ,content, content_type, status_code = 200) => {
    res.writeHead(status_code, {'Content-Type': content_type, 'charset': 'utf-8'})
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

/*  
    @param {String} url
    @param {Function(resp)} success
    @param {Function(err)} error
*/
const axios_get = (
    url,
    sucess = (resp) => {},
    error = (err) => {console.log(err)}
) => {
    axios.get('http://localhost:3000' + url)
    .then(rep => {
        sucess(rep.data)

    })
    .catch(err => {
        error(err)  
    })
}

/*  
    @param {String} title
    @param {List} list
    @param {String} name_field
*/
const mount_html_index = (title, list, name_field = "name") => {
    var site = `<meta charset="UTF-8"><div style=\"display:flex; flex-direction: column; justify-content: center;align-items: center;\"><h1 style="margin-top: 3vh;">${title.charAt(0).toUpperCase() + title.slice(1)}</h1><form style="width: 17vw; height: 6vh; display:flex; justify-content: center;align-items: center;"><input style="width: 14vw; padding-top: 1vh;" name="q" type=\"test\"/><input value="Search"style="height: 3vh;"type=\"submit\"/></form><ul style="width: 20vw;">`

    list.forEach(e => {
        site += `<a href=\"http://localhost:3001/${title}/${e.id}\"><li>${e[name_field]}</li></a>`
    })

    site += '</ul></div>'
    return site
}  

/*  
    @param {String} title
    @param {JSON} data
*/
const mount_html_desc_page = (title, data) => {
    var site = `<meta charset="UTF-8"><div style=\"display:flex; flex-direction: column; justify-content: center;align-items: center;\"><h1 style=\"margin-top: 3vh;\">${title}</h1><dl style=\"width: 80%; display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;\">`
                    
    for(const key of Object.keys(data)){
        
        site += "<div style=\"display:flex; flex-direction: column; align-items: center; justify-content: center;\"<dt><b>" + key + ":</b></dt><dd>" + (typeof(data[key]) == "string" ? data[key] : data[key]["#text"]) + "</dd></div>"
    }

    site += "</dl><a href=\"http://localhost:3001/\">Back Home</a>"

    return site
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
        else if(req.url.match(/^\/alunos\/[a-zA-Z][a-zA-Z0-9]*$/)){

            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_desc_page("Aluno", data), 'text/html')
                    log2console(req, 200, "Page sent")

                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                    
                }
            )

        }
        else if(req.url.match(/^\/instrumentos\/[a-zA-Z][a-zA-Z0-9]*$/)){

            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_desc_page("Instrumento", data), 'text/html')
                    log2console(req, 200, "Page sent")

                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                    
                }
            )

        }
        else if(req.url.match(/^\/cursos\/[a-zA-Z][a-zA-Z0-9]*$/)){

            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_desc_page("Curso", data), 'text/html')
                    log2console(req, 200, "Page sent")

                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                    
                }
            )

        }
        else if(req.url.match(/^\/alunos(\?.*)?$/)){
            
            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_index("alunos", data, "nome"), 'text/html')
                    log2console(req, 200, "Page sent")
                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                }
            )

        }
        else if(req.url.match(/^\/instrumentos(\?.*)?$/)){

            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_index("instrumentos", data, "#text"), 'text/html')
                    log2console(req, 200, "Page sent")
                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                }
            )

        }
        else if(req.url.match(/^\/cursos(\?.*)?$/)){
            
            axios_get(
                req.url,
                (data) => {
                    send_response(res, mount_html_index("cursos", data, "designacao"), 'text/html')
                    log2console(req, 200, "Page sent")
                },
                (err) => {
                    send_response(res, "Internal Server error", 'text', 500)
                    log2console(req, 500, "GET request error")
                }
            )

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