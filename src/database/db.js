const sqlite3 = require('sqlite3').verbose()

//criar o objeto que irá fazer as operações do banco
const db = new sqlite3.Database('./src/database/database.db')
module.exports = db

//utilizar banco
db.serialize(()=>{
    //criar tabela

    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            itens TEXT
        );
    `)

// //     //inserir dados

// //     const query = `
// //         INSERT INTO places(
// //             name,
// //             image,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             itens
// //         )VALUES(?,?,?,?,?,?,?);
// //     `

// //     function afterInsertData(err){
// //         if(err){
// //             return console.log('erro')
// //         }
// //         console.log('Cadastrado com sucesso')
// //         console.log(this)
// //     }

// //     db.run(query, values, afterInsertData)

// //     //consultar dados

    // const consult = `
    //     SELECT * FROM places
    // ` 
    // function afterConsultData(err, rows){
    //     if(err){
    //         return console.log('erro')
    //     }
    //     console.log('Aqui estão os registros:')
    //     console.log(rows)
    // }
    // db.all(consult, afterConsultData)

// //     //deletar dados

// //     const delItem = `
// //         DELETE FORM places WHERE id = ?
// //     `
// //     function afterDelItem(err){
// //         if(err){
// //             return console.log('erro')
// //         }
// //         console.log('Registro deletado com sucesso!')
// //     }

// //     db.run(delItem,valuesDel,afterDelItem)
 })