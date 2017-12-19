 var app = angular.module('myApp',['ngRoute','ngCookies']);

app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
		.when('/', {
			templateUrl: 'views/Home.html',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.when('/register',{
			
			templateUrl:'register/register.html',
			controller: 'UserController'
					
				})
		/*.otherwise({
			redirectTo: '/'
		});*/
});