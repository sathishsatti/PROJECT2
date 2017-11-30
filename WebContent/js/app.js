/**
 * 
 */
var app=angular.module("app",['ngRoute'])
app.config(function($routeProvider){
	
	
	$routeProvider
	.when('/persons',{
		templateUrl:'persons.html',
		controller:'personctrl'
	})
	
	.when('/personform',{
		templateUrl:'personform.html',
		controller:'personctrl'
	})
	
	
	.when('/employees',{
		
	})
	.otherwise({templateUrl:'home.html'})
})

