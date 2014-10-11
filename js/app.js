var hoboApp = angular.module('hoboApp', []);

hoboApp.controller('gameController', function($scope){
	$scope.employees=[
		{
			name:'Napoleon Bonerfart', 
			description: 'Good at breaking bones. And phones.',
			price: 100000,
			count: 100,
			src: "img/employee1.png"
		},
		{
			name:'Durria Bananachin', 
			description: 'The Facebook addict.',
			price: 100000,
			count: 50,
			src: "img/employee3.png"
		},
		{
			name:'Kazimir Waffles', 
			description: 'Bird brain.',
			price: 100000,
			count: 2,
			src: "img/employee2.png"
		},
		{
			name:'Nigel Nybbles', 
			description: 'Good old-fashioned postage.',
			price: 19889,
			count: 50,
			src: "img/employee4.png"
		}
	];

	$scope.icons=[
		{
			src: "img/phone.png"
		},
		{
			src: "img/mail.png"
		},
		{
			src: "img/facebook.png"
		},
		{
			src: "img/twit.png"
		}

	]
});