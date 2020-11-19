const axios = require('axios')


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
    @param {String} url
    @param {Function(err)} error
*/
const axios_get = async (
    url
) => {

    let data;
    
    await axios.get('http://localhost:3000' + url)
    .then(resp => {
        data = resp.data
    })
    .catch(e => {
        console.log(e)
        data = undefined
    })

    return data

}

exports.log2console = log2console
exports.axios_get = axios_get
