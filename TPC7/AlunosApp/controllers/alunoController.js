var Aluno = require('../models/aluno')

module.exports.list = () => {
    return Aluno.find().exec()
}

module.exports.lookUp = (id) => {
    return Aluno.find({_id: id}).exec()
}

module.exports.deleteOne = (id) => {
    return Aluno.deleteOne({_id: id}).exec()
}

module.exports.insert = (data) => {
    return Aluno.create(data)
}

module.exports.updateOne = (id,data) => {
    return Aluno.updateOne({_id: id}, data)
}

module.exports.lookUpRegex = (query) => {
    return Aluno.find({$or : [
        {Nome : new RegExp(query)},
        {Número : new RegExp(query)},
        {Git : new RegExp(query)},
        {Sexo : new RegExp(query)}
    ]}).exec()
}