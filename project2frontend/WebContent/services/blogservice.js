/**
 * BlogService
 */

app.factory('BlogService',function($http){
	var blogService={}
	var BASE_URL="http://localhost:8081/project2middleware"
		
	blogService.addBlog=function(blog){
		return $http.post(BASE_URL + "/addblogpost",blog)
	}
	
	blogService.blogsWaitingForApproval=function(){
		return $http.get(BASE_URL + "/blogswaitingforapproval")
	}
	
	blogService.blogsApproved=function(){
		return $http.get(BASE_URL + "/blogsapproved")
	}
	
	blogService.getBlog=function(blogId){
		return $http.get(BASE_URL + "/getblog/"+blogId)
	}
	return blogService
})