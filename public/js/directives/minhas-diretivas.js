angular.module('minhasDiretivas',[]) 

.directive('meuCard', function(){

	var ddo = {};

	ddo.restric ="AE";

	ddo.transclude = true;

 	ddo.templateUrl = 'html/meu-card.html';

    return ddo;


})


.directive('agendaConsultas', function(){


var ddo = {};

ddo.restric = "AE";

ddo.transclude = true;

ddo.templateUrl = 'html/agenda-consultas.html';

return ddo;


})


.directive('tabelaPacientes', function(){


var ddo = {};

ddo.restric = "AE";

ddo.transclude = true;

ddo.templateUrl = 'html/tabela-pacientes.html';

return ddo;

})


// .directive('fotoPaciente', function() {

//     var ddo = {};

//     ddo.restrict = "AE";

//     ddo.scope = {
        
//         url: '@'
//     };

//     ddo.template = '<img class="img-responsive center-block" src="{{url}}">';           
        
//     return ddo;

// })
     

.directive('navInicio', function(){


var ddo = {};

ddo.restric = "AE";

ddo.transclude = true;

ddo.templateUrl = 'html/nav-inicio.html';

return ddo;

})


.directive('pFiltro', function(){
    
  
    var ddo = {};

    ddo.restric = "AE";

    ddo.transclude = true;

    ddo.templateUrl = 'html/input-filtro.html';

return ddo;

});
    

    
