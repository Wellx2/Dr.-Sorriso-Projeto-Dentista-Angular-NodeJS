angular.module('consultorio').controller('EditarPacienteController', function ($scope, $routeParams) {
	

var p1 = JSON.parse( localStorage.getItem('pacientes'));


$scope.pacientes = p1 || [];



$scope.paciente = $scope.pacientes.filter(function (paciente) {
	return paciente.prontuario == $routeParams.prontuario;   	
})[0];	


$scope.generos = [
		{sexo: 'Masculino'},
		{sexo: 'Feminino'}
	];


$scope.editarpaciente = true; 

$scope.EditPaciente = function(paciente){

		$scope.pacientes = $scope.pacientes.filter(function (Ppaciente) {
			return Ppaciente.prontuario != paciente.prontuario;

			
		});


		$scope.pacientes.push(paciente);


		localStorage.setItem('pacientes', JSON.stringify($scope.pacientes));
		
		alert("editado com sucesso");

	};



});