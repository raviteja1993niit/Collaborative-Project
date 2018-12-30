/**
 * FriendService
 */
app.factory('FriendService',function($http){
	var friendService={}
	var BASE_URL="http://localhost:8081/project2middleware"
		friendService.getAllSuggestedUsers=function()
		{
		return $http.get(BASE_URL+"/suggestedusers")
		}
	friendService.sendFriendRequest=function(toId){
		return $http.post(BASE_URL+"/friendrequest",toId)
		}
	return friendService;
})