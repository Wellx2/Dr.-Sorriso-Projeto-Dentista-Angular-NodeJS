angular.module('consultorio').controller('NewConsultaController', function ($scope, $routeParams) {


var p1 = JSON.parse( localStorage.getItem('pacientes'));


$scope.pacientes = p1;



$scope.paciente = $scope.pacientes.filter(function (paciente) {
	return paciente.prontuario == $routeParams.prontuario;   	
	})[0];
	

	$scope.Nconsulta = function(){

		
		localStorage.setItem('pacientes', JSON.stringify($scope.pacientes));



console.log("novo", $scope.paciente);	

		


	};	

	
});


