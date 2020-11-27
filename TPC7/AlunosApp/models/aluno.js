var mongoose = require('mongoose')

var alunoSchema = new mongoose.Schema({
    Número: String,
    Nome: String,
    Sexo: String,
    Git: String,
    tpcs: [Number],
    Avatar: String
});

module.exports = mongoose.model('Aluno', alunoSchema, 'Alunos')