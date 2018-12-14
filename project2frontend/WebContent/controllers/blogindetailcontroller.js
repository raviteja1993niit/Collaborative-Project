/**
 * BlogInDetailCtrl
 */
app.controller('BlogInDetailCtrl',function($scope,BlogService,$routeParams,$location){
	var blogId=$routeParams.blogId
	if($routeParams.blogId!=undefined){
		BlogService.getBlog(blogId).then(function(response){
			//query? select * from blogpost where blogpostid=?
			$scope.blogPost=response.data  //blogapprovalform.html or blogdetails.html
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
})