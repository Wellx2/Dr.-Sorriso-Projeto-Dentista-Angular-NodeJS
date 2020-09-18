angular.module('consultorio').controller('PacientesController', function($scope){
 

	var p1 = JSON.parse( localStorage.getItem('pacientes'));


	$scope.pacientes = p1 || [];

	console.log('nosso scope: ', $scope.pacientes);

	$scope.generos = [
		{sexo: 'Masculino'},
		{sexo: 'Feminino'}
	];


	// Recebe o valor do paciente atual para poder excluir.

	// no html ou angular passo o função e valor que quero pegar no caso paciente.prontuario.

	// na função apenas defino o nome e passo para variavel atual (carrega o valor de paciente.prontuario).

	$scope.Paexcluir = function(pacienteProntuario){
		$scope.pacienteAtual = pacienteProntuario;

	};

	$scope.Excluir = function(BpProntuario){

		console.log(BpProntuario);

		$scope.pacientes = $scope.pacientes.filter(function (paciente) {
			return paciente.prontuario != BpProntuario;

			
		});

		localStorage.setItem('pacientes', JSON.stringify($scope.pacientes));
		


	};	




	$scope.idade = function(Datanasc){
		// var dataAtual = new Date();
		//   var idade = Datanasc - dataAtual;
				var d = new Date();
			  	var n = d.getFullYear();
			  	var Datanascimento = new Date(Datanasc);
			  	var Dataidade = Datanascimento.getFullYear();

			  	var idade = (n - Dataidade); 

			  	return idade;
	};




	

	// $scope.novopaciente = true;


	// $scope.adicionaPaciente = function(paciente){

	// 	var adc =  parseInt(localStorage.getItem("adc"));

	// 	adc++;

	// 	paciente.prontuario = adc.toString().padStart(7,"0");

	// 	localStorage.setItem("adc", adc.toString());

	// 	$scope.pacientes.push(paciente);
		
	// 	localStorage.setItem('pacientes', JSON.stringify($scope.pacientes));
	// 	alert("Registro adicionado.");
		
	// };

	
});
