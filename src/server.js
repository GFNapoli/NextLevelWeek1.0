const express = require('express')
const server = express()

//configurar pasta publica
server.use(express.static('public'))

// usando template engine
const nunjunks = require('nunjucks')
nunjunks.configure('src/views', {
    express: server,
    noCache: true    
})

//caminhos da aplicação
//req: requisição
//res:resposta
//nodemon -d instala um monitor durante o desenvolvimento para não precisar ficar reiniciando
server.get('/', (req,res)=>{
    return res.render('index.html')
})
server.get('/cadastro', (req,res)=>{
    return res.render('create-point.html')
})
server.get('/busca', (req,res)=>{
    return res.render('search-results.html')
})
// ligar server
server.listen(3000)