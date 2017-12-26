

app.factory('JobService',function($http){
	
	var BASE_URL = 'http://localhost:8082/project2';
	
	var jobService = {}
	
	jobService. addJob = function(job){
		
		return $http.post(BASE_URL+"/addJob",job)
	}
	
	jobService.getAllJobs = function(){
		
		return $http.get(BASE_URL+"/getAllJobs")
	}
	
	jobService.getJob = function(jobId){
		
		return $http.get(BASE_URL+"/getJob/"+jobId)
	}
	
	return jobService;
})