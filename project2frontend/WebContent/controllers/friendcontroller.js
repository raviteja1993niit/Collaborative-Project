/**
 * FriendCtrl
 */
app.controller('FriendCtrl',function($scope,$location,FriendService)
{ 
	function getAllSuggestedUsers(){
	FriendService.getAllSuggestedUsers().then(function(response){
		$scope.suggestedUsers=response.data
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	}
	$scope.sendFriendRequest=function(toId){
		//call a function in service
		FriendService.sendFriendRequest(toId).then(function(response){
			alert("Friend Requset Has Been Sended")
			getAllSuggestedUsers()
		},function(response){
		if(response.status == 401)
		$location.path('/login')
		})
		}
	
	    function getAllPendingRequests(){
		FriendService.getAllPendingRequests().then(
		function(response){
		$scope.pendingRequests=response.data
		},function(response){
		if(response.status == 401)
		$location.path('/login')
		})
		}

		$scope.acceptFriendRequest=function(request){
		FriendService.acceptFriendRequest(request).then(function(response)
		{
		getAllPendingRequests()
		},function(response)
		{
		if(response.status == 401)
		$location.path('/login')
		})
		}

		$scope.deleteFriendRequest=function(request){
		FriendService.deleteFriendRequest(request).then(function(response)
		{
		getAllPendingRequests()
		},function(response)
		{
		if(response.status == 401)
		$location.path('/login')
		})
		}
		getAllPendingRequests()
        getAllSuggestedUsers()
	
})