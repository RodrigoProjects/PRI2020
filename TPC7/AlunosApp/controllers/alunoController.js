var Aluno = require('../models/aluno')

module.exports.list = () => {
    return Aluno.find().exec()
}

module.exports.lookUp = (id) => {
    return Aluno.find({_id: id}).exec()
}

