/**
 * BlogInDetailCtrl
 */
app.controller('BlogInDetailCtrl',function($scope,BlogService,$routeParams,$location,$sce){
	var blogId=$routeParams.blogId
	var blogPostId=$routeParams.blogPostId
	var user_email=$routeParams.user_email
	$scope.isRejected=false
	if($routeParams.blogId!=undefined){
		BlogService.getBlog(blogId).then(function(response){
			//query? select * from blogpost where blogpostid=?
			$scope.blogPost=response.data  //blogapprovalform.html or blogdetails.html
			$scope.htmlContent=$sce.trustAsHtml($scope.blogPost.blogContent)
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	$scope.approveBlogPost=function(blogPostId)
	{
		BlogService.approveBlogPost(blogPostId).then(function (response){
			$location.path('/blogswaitingforapproval/0')
		}),function(response){
			$scope.error=response.data
			if(response.status == 401)
				$location.path('/login')
		}
	}
	$scope.rejectBlogPost=function(blogPostId)
	{
		BlogService.rejectBlogPost(blogPostId).then(function (response){
			$location.path('/blogswaitingforapproval/0')
		}),function(response){
			$scope.error=response.data
			if(response.status == 401)
				$location.path('/login')
		}
	}

	//http://localhost:8080/middlewarecruddemo/getbook?isbn=undefined
	if(blogPostId!=undefined){
	BlogService.getBlog(blogPostId).then(function(response){
			$scope.blogPost=response.data
			
		},function(response){
			console.log(response)
		})
	}

	$scope.updateBlogPost=function(blogPost)
	{
		alert('BlogPost details Updated successfully...')
		BlogService.updateBlogPost(blogPost).then(function (response){
			$scope.blogPost={}
		}),function(response){
			$scope.error=response.data
			if(response.status == 401)
				$location.path('/login')
		}
	}
	
	/*$scope.blogswaitingForApprovalPostedByUser=function(email)
	{
		alert('Blogs Waiting For Approval Posted By User...')
		BlogService.blogswaitingForApprovalPostedByUser(email).then(function (response){
			$scope.blogs=response.data
		}),function(response){
			$scope.error=response.data
			if(response.status == 401)
				$location.path('/login')
		}
	}*/
	function blogswaitingForApprovalPostedByUser(){
		alert('Update Waiting Blogs...')
		BlogService.blogswaitingForApprovalPostedByUser().then(function (response){
			$scope.blogposts=response.data
		},function(response){
			$scope.error=response.data 
			if(response.status==401)
				$location.path('/login')
		})
	}
	if($routeParams.value==0)
		{
	blogswaitingForApprovalPostedByUser()//call the function only if logged in user role is 'ADMIN'
		}
	function blogswaitingForApprovalPostedByUser1(){
		alert('Update Approved Blogs...')
		BlogService.blogswaitingForApprovalPostedByUser1().then(function (response){
			$scope.blogposts1=response.data
		},function(response){
			$scope.error=response.data 
			if(response.status==401)
				$location.path('/login')
		})
	}
	if($routeParams.value==1)
		{
	blogswaitingForApprovalPostedByUser1()//call the function only if logged in user role is 'ADMIN'
		}
	$scope.showRejectionTxt=function()
	{
		$scope.isRejected=!$scope.isRejected
	}
})