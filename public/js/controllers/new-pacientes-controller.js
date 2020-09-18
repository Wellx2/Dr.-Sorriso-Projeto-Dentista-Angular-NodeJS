angular.module('consultorio').controller('NewPacientesController', function ($scope) {
	
	
	var p1 = JSON.parse( localStorage.getItem('pacientes'));


	$scope.telefone = '/^\d{4,5}-\d{4}\$/';	

	$scope.pacientes = p1 || [];


	// $scope.pacientes = JSON.parse(localStorage.getItem('pacientes'));


	$scope.generos = [
		{sexo: 'Masculino'},
		{sexo: 'Feminino'}
	];

	$scope.novopaciente = true;


	$scope.adicionaPaciente = function(paciente){

		var adc =  parseInt(localStorage.getItem("adc"));

		adc++;

		paciente.prontuario = adc.toString().padStart(7,"0");

		localStorage.setItem("adc", adc.toString());

		$scope.pacientes.push(paciente);
		
		localStorage.setItem('pacientes', JSON.stringify($scope.pacientes));
	
		alert("Registro adicionado.");
		delete $scope.paciente;

		$scope.formulario.$setPristine();
	
		

	}
	
	

});