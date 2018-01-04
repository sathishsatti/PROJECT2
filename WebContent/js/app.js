// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
   var app = angular.module('myApp',['ngRoute','ngCookies']);

   app.config(function ($routeProvider,$locationProvider) {
	    $locationProvider.hashPrefix('');
	    $routeProvider

            // route for the home page
            .when('/register', {
                templateUrl : 'views/Register.html',
                controller  : 'UserController'
            })

            // route for the about page
            .when('/login', {
                templateUrl : 'views/Login.html',
                controller  : 'UserController'
            })

            
            // route for the contact page
            .when('/Home', {
                templateUrl : 'views/Home.html',
                controller  : 'HomeController'
            })
            
            .when('/createblog', {
        		templateUrl : 'views/createNewBlog.html',
        		controller :    'BlogPostController'
        	})

        	.when('/viewblog', {
        		templateUrl :    'views/viewBlogs.html',
        		controller :      'BlogPostController'
        		})
        		.when('/manageBlogs',
        			{
        				templateUrl : 'admin/manageBlogs.html',
        				controller :    'AdminController'
        			})
        		.when('/getBlogForApproval/:id',{
        		templateUrl:'admin/approvalform.html',
        		controller:'AdminController'
        	})
        	.when('/getBlogDetail/:id',{
        		templateUrl:'view/viewUserBlogs.html',
        		controller:'BlogPostController'
        	})		
   })
app.run(function($rootScope,$cookieStore,UserService,$location){
	alert($cookieStore.get('currentUser'))
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get('currentUser')
		
	$rootScope.logout=function(){
		/*
		 * Call middleware logout url -> Middleware - remove HttpSession attribute,update online status to false
		 * on success - in frontend , remove cookieStore attribute currentUser, delete $rootScope.
		 */
		UserService.logout().then(function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			$location.path('/login')
			
		},function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			console.log(response.status)
			$location.path('/login')
		})
	}
})