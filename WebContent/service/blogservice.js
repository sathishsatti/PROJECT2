app.factory('BlogPostService',function($http)
		{
var blogPostService={}

blogPostService.saveBlog=function(blogPost)
{
return $http.post("http://localhost:8888/backend2/createBlog", blogPost)
}

blogPostService.blogsApproved=function()
{
	return $http.get("http://localhost:8888/backend2/listofblogs/"+1)
	}


blogPostService.getBlogPost=function(id)
{
	return $http.get("http://localhost:8888/backend2/getblogpost/"+id)
	}


blogPostService.addComment=function(blogComment){
    return $http.post("http://localhost:8888/backend2/addblogcomment",blogComment)
    }

blogPostService.getBlogComments=function(blogId){
    return $http.get("http://localhost:8888/backend2/getblogcomments/"+blogId)
    }

return blogPostService;
})