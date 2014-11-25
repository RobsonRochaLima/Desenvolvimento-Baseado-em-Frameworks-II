
var HelloView = Backbone.View.extend({
    el: $('body'),  //atributo el representa um elemento DOM onde a view está ou será inserida
    initialize: function() { //initialize: chamado quando a uma instância da view é feita
        this.render();
    },
    render: function() { //render: responsavel por gerar o HTML da view
        $(this.el).append("<h1>Hello World</h1>");
    }

});

//instanciando a view
var view = new HelloView();
