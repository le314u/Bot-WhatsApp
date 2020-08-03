const express = require('express')
const app = express()
const env = require('./env');
const template = require('./middleware/whats/route')

app.use(template.nome, template.router);

/*Mostra o que foi implementado */
app.get('/', function(req, res) {
	let listRoutes = listaMiddleware([template])
	res.send('<pre>'+JSON.stringify(listRoutes, null, 4)+'</pre>')
});

app.listen(env.porta, function() {
	console.log('Rodando '+env.nome+' na porta '+ env.porta);
});

function listaMiddleware(lista){
	extractEnv = (router)=>{
		return {
			nome:router.nome,
			rotas:router.rotas
		}
	}
	listRoutes = (arrayRoutes)=>{
		let newArray = []
		arrayRoutes.forEach(element => {
			newArray.push(extractEnv(element))
		})
		return newArray
	}
	
	return {
		porta:env.porta,
		routers:[
			listRoutes(lista)
		]
	}
}