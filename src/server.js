const express = require('express')
const server = express()

// chamar banco de dados
const db = require('./database/db')
//configurar pasta publica
server.use(express.static('public'))

//habilitar uso do req boby
server.use(express.urlencoded({extended: true}))

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
server.post('/savePoint', (req,res)=>{
    const query = `
        INSERT INTO places(
            name,
            image,
            address,
            address2,
            state,
            city,
            itens
        )VALUES(?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.itens
    ]

    function afterInsertData(err){
        if(err){
            return console.log('erro')
        }
        res.render('create-point.html', {saved: true})
    }

    db.run(query, values, afterInsertData)
})

server.get('/search', (req,res)=>{
    const search = req.query.search
    if(search == ''){
        return res.render('search-results.html',{total: 0})
    }
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){
        if(err){
            return console.log('erro')
        }
        let total = rows.length
        return res.render('search-results.html',{places: rows, total: total})
    })
})
// ligar server
server.listen(3000)