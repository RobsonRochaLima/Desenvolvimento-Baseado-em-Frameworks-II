
var MyRouter = Backbone.Router.extend({
	routes:{ //atributo que define rotas
		//percurso/parametro(id) : função
		"helloview":"getMinhaView",
		"router/:parametro": "getMyRouter",	//http://localhost/backbone/#
		"newrouter/*parametro": "getMyNewRouter"
	},
	getMinhaView: function(){
		new HelloView();
	},
	getMyRouter: function(p){	//com parametro
		console.log(p);		
		//new NovaView();
	},	
	getMyNewRouter: function(p){
		console.log(p);
	}

});

//instanciando
var router = new MyRouter();
//iniciando o Backbone.history
Backbone.history.start();
