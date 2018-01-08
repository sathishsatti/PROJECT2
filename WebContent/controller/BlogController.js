app.controller('BlogPostController',function($scope,BlogService,$location,$rootScope){
	
	$scope.message=''
	$scope.saveBlog=function(){
		BlogService.saveBlog($scope.blog)
		.then(
			function(response){
				$scope.success="Blog Post added successfully and it is waiting for approval"
			$location.path('/getblogs')
		},function(response){
			if(response.status==401){
				$location.path('/login')
			}
			if(response.status==500){
				$scope.error=response.data
				$location.path('/saveblog')
			}
		})
	}
	
	//Two variables, blogsApproved, blogsWaitingForApproval
	
	//Statement to initialize variable blogsApproved 
	BlogService.getBlogsApproved().then(function(response){
		$scope.blogsApproved=response.data//select * from blogpost where approved=1
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	if($rootScope.currentUser.role=='ADMIN'){
	BlogService.getBlogsWaitingForApproval().then(function(response){
		$scope.blogsWaitingForApproval=response.data//select * from blogpost where approved=0
	},function(response){
		if(response.status==401){
			if(response.data.code==5)
			$location.path('/login')
			else{
				alert(response.data.message)
				$location.path('/home')
			}
		}
	})
	}
	
})