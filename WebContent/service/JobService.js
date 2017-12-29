 
app.factory('JobService',function($http){
	var jobService={}
	jobService.createJob=function(job)
	{
		console.log("job service")
		return $http.post("http://localhost:8082/backend2-project2/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8082/backend2-project2/getalljobs")
	}
	
	jobService.getJobById=function(id){
        console.log(id)
        return $http.get("http://localhost:8082/backend2-project2/getjobbyid/"+id)
    }
	
	return jobService;
})