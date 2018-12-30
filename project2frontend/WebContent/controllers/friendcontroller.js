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
			getAllSuggestedUsers()
		},function(response){
		if(response.status == 401)
		$location.path('/login')
		})
		}
	getAllSuggestedUsers()
	
})