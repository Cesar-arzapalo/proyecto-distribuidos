const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()



const conexion_mongo='mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
MongoClient.connect(conexion_mongo, { useUnifiedTopology: true })
.then(client => {
    console.log('Conexion Exitosa')
    const db = client.db('proyecto')
    const coleccion = db.collection('pedido')
    //Usamos body parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.post('/post',(req,res) =>{
        console.log('Hola')
        
        coleccion.insertOne(req.body)
        .then(result=>{
            console.log(result)
            res.redirect('/')
        })
        .catch(error=>console.error(error))
    })
    
    app.get('/', (req, res) => {
        console.log('OK')
        db.collection('pedido').find().toArray()
        .then(results => {
        res.send(results)
        })
        .catch(error => console.error(error))
        //res.sendFile(__dirname + '/index.html')
    })
    
    app.listen(3000, function() {
        console.log('listening on 3000')
        //res.sendFile(__dirname + '/index.html')

    })
})