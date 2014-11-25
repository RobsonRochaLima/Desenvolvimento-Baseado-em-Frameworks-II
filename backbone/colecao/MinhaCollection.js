//Criando modelo
var Song = Backbone.Model.extend({
	defaults:{
		name: "Vazio",
		artist:"Vazio"
	},
	initialize: function(){		
	}
});

//inserindo modelo na coleção
var Album = Backbone.Collection.extend({
	model: Song
});

//atribuindo modelos à variaveis
var musica1 = new Song({name: "Musica 1", artist: "Artista 1"});
var musica2 = new Song({name: "Musica 2", artist: "Artista 2"});
var musica3 = new Song({name: "Musica 3", artist: "Artista 3"});
var musica4 = new Song({name: "Musica 4", artist: "Artista 4"});


//inserindo os modelos na coleção
var myAlbum = new Album([musica1, musica2, musica3, musica4]);

console.log("-------Minha Coleção----------"); //melhorar visualização no console

//pecorrendo e imprimindo a coleção
myAlbum.models.forEach(function(song){
	console.log(song.get('name')); //[musica1, musica2, musica3, musica4]
});

