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
            
            
        	.when('/savejob',{
        		templateUrl:'views/jobform.html',
        		controller:'JobController'
        	})
        	
        	
        	.when('/getalljobs',{
        		templateUrl:'views/jobtitle.html',
        		controller:'JobController'
            })
            
            
            .when('/addblog',{
           	templateUrl:'views/blogform.html', //V to Controller
           	controller:'BlogPostController'
            })
            
            
            .when('/getblogs',{
           	templateUrl:'views/blogslist.html',//Controller to V
           	controller:'BlogPostController'
            })
            
            
            .when('/admin/getblog/:id',{
            templateUrl:'views/approvalform.html',
            controller:'BlogPostDetailsController'
            })
            
            
            .when('/getblog/:id',{
           	templateUrl:'views/blogdetails.html',
           	controller:'BlogPostDetailsController'
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