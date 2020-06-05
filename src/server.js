const express = require('express')
const server = express()
//configurar pasta publica
server.use(express.static('public'))
//caminhos da aplicação
//req: requisição
//res:resposta
//nodemon -d instala um monitor durante o desenvolvimento para não precisar ficar reiniciando
server.get('/', (req,res)=>{
    res.sendfile(__dirname + '/views/index.html')
})
server.get('/cadastro', (req,res)=>{
    res.sendFile(__dirname + '/views/create-point.html')
})
server.get('/busca', (req,res)=>{
    res.sendFile(__dirname + '/views/search-results.html')
})
// ligar server
server.listen(3000)