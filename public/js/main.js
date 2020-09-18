angular.module('consultorio', ['minhasDiretivas', 'ngAnimate', 'ui.utils.masks', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);


	$routeProvider.when('/principal', {
		
		templateUrl:'html/principal.html',
		controller: 'PacientesController'
	});

	$routeProvider.when('/newpaciente', {
		
		templateUrl:'html/adicionar-paciente.html',
		controller: 'NewPacientesController'
	});



	$routeProvider.when('/editarpaciente/:prontuario', {
		
		templateUrl:'html/adicionar-paciente.html',
		controller: 'EditarPacienteController'
	});

	$routeProvider.when('/agendarconsulta/:prontuario', {
		
		templateUrl:'html/new-consulta.html',
		controller: 'NewConsultaController'
	});


	$routeProvider.otherwise({redirectTo: '/principal'});

});

