// ---------- MONGODB CONNECTION ----------

var mongoose = require('mongoose')

var mongoDB = 'mongodb://127.0.0.1/PRI2020'

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
    console.log("Conexão ao MongoDB realizada com sucesso...")
});

// ----------------------------------------

var alunoSchema = new mongoose.Schema({
    Número: String,
    Nome: String,
    Sexo: String,
    Git: String,
    tpcs: [Number],
    Avatar: String
});

let alunoModel = mongoose.model('Aluno', alunoSchema, 'Alunos')

let data = [
    {
        "Nome" : "Rodrigo da Silva Pimentel",
        "Número" : "a83765",
        "Sexo" : "Masculino",
        "Git" : "https://github.com/RodrigoProjects/",
        "tpcs" : [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0
        ],
        "Avatar" : null
    },
    {
        "tpcs" : [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0
        ],
        "Número" : "a83761",
        "Nome" : "Angélica Matos de Freitas",
        "Sexo" : "Feminino",
        "Git" : "",
        "Avatar" : null
    },
    {
        "tpcs" : [
            1,
            1,
            0,
            1,
            1,
            1,
            1,
            0
        ],
        "Número" : "a44556",
        "Nome" : "Marcelo Rebelo de Sousa",
        "Sexo" : "Masculino",
        "Git" : "",
        "Avatar" : "upload_e34252611b8a32284344204f37c4c77c.jpeg"
    },
    {
        "tpcs" : [
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            0
        ],
        "Número" : "a78341",
        "Nome" : "António Costa",
        "Sexo" : "Masculino",
        "Git" : "",
        "Avatar" : "upload_f3003f1e7345d218c1a728b4ef3e6175.jpeg"
    },
    {
        "tpcs" : [
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0
        ],
        "Número" : "a89567",
        "Nome" : "Joaquim Oliveira Sousa",
        "Sexo" : "Masculino",
        "Git" : "",
        "Avatar" : null
    }
]

alunoModel.create(data)