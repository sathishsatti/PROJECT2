app.factory('UserService',function($http)
{
	
	var  BASSE_URL="http://localhost:8888/backend2";
	
    var userService={}
    
    userService.registerUser = function(user){
    	
    	console.log(user)
    	return $http.post(BASSE_URL +"/registration",user)
    }
    
    userService.login=function(user){
    	return $http.post(BASSE_URL +"/login",user)
    }
 


userService.logout=function(user){
	return $http.get(BASSE_URL +"/logout",user)

}

userService.getUserByUsername=function(){
    return $http.get(BASSE_URL +"/getuserdetails")
}

userService.updateUserProfile=function(user){
return $http.put(BASSE_URL +"/updateprofile",user)
}

    
return userService;
})