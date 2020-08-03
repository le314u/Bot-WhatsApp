var express = require('express');
var router = express.Router();
var manipulation = require('./interface');
let comands;

module.exports = {
    router:router,
    nome:'/whats',
    rotas:[
        '/help',
        '/init',
        '/new'
    ]
};

// Home page route
router.get('/help', function(req, res) {
    try{
        res.send(Object.keys(comands))
    } catch(err){
        res.send('Whats não instanciado')
    }  
});

// About page route
router.get('/init', function(req, res) {
    manipulation.start(flagDebug=true)
    .then((listComands)=>{
        listComands.login.checkLogin()
        .then(()=>{
            comands = listComands
            res.send('Pagina iniciada <era pra enviar o QrCode>');
        }).catch(()=>{
            res.send('Falha no login');
        })
    })
});

// About page route
router.get('/new', function(req, res) {
    comands.historic.newMsgs().then((a)=>{
        res.send(a)
    })
});
