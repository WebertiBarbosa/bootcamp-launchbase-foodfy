const express = require ('express')
const nunjucks = require('nunjucks')
const receita = require('./data')


const server = express()

server.set ('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.static('public'))

server.get('/', function (req, res){
    return res.render('index', {items: receita})
})

server.get('/sobre', function(req, res){
    return res.render('sobre')
})

server.get('/receitas', function(req, res){
    return res.render('receitas', {items: receita})
})

server.get('/receitas/:index', function (req, res) {
    const receitaIndex = req.params.index

    return res.render('receitas', {item: receitas[receitaIndex]})

})

server.listen(5000, function(){
    console.log('server is running')
})