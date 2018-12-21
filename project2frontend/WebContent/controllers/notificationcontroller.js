/**
 * NotificationCtrl
 */
app.controller('NotificationCtrl',function($scope,$rootScope,$location,NotificationService){
	function getAllNotificationsNotViewed(){
		alert('Notification............')
		NotificationService.getAllNotificationsNotViewed().then(function(response){
			$rootScope.notifications=response.data
			$rootScope.notificationCount=$rootScope.notifications.length
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	getAllNotificationsNotViewed()
})

