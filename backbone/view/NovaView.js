//criando uma view
var NovaView = Backbone.View.extend({
    el: $('body'),  //atributo el representa um elemento DOM onde a view está ou será inserida
    initialize: function() { //initialize: chamado quando a view é instanciada
        this.render();
    },
    render: function() { //render: responsavel por gerar o HTML da view
        $(this.el).append("<h1>Hello Router</h1>");
    }

});

