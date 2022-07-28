const api = require('./api')
const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.use('/', function (req, res) { 
    res.send({message: "Ta rodando"})
})

app.get('/id:', async(req, res) => {
    const { id } = req.params;

    try {
        const { data } = await api.get("1")

        return res.send({ name: data.name})
    } catch (error) {
        res.send({message: "não foi possivel achar"})
    }
})

app.listen(5501, () => console.log('Rodando na porta 5500'))
