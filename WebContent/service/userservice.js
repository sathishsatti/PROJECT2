app.factory('userservice',function($http)){
	var userservice={}
}
	var userservice.registerUser=function(user){
		return $http.post("BASE_URL"+"/registeruser",user)
	}
		return userService;
	}
}
