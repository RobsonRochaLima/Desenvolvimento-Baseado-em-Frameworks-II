//criando um modelo
Person = Backbone.Model.extend({
	defaults:{ //valores por default
		name: 'vazio',
		age: 0
	},
	initialize: function(){ //acionada quando instanciado
		this.on("change:name", function(model){
			var name = model.get("name");
			var age = model.get("age");
			alert("Nome alterado: " + name + ", idade: " + age);
		});

	}
});


//Definindo Atributos
var person = new Person({name:"Thomas", age: 25});

// obtendo atributos
var age = person.get("age");
var name = person.get("name");

console.log("-------Minha model------------");
console.log(age);
console.log(name);



//Manipulando atributos - (alterando o nome)
var person = new Person({name: "Maria da Silva", age: 22});
person.set({name: 'Joao da Silva'});



