eventsApp.controller('EventDetailsController',function($scope,eventDataService,$routeParams,$route,event){ // evnent is not service its reolve object                                                                                                                    // property 
    //$scope.event = eventDataService.getEvent($routeParams.eventId);
    
   $scope.event = event;
    
    console.log(event.sessions);
    
    $scope.reload = function(){
        $route.reload();
    }
    
    $scope.upVotecnt = function(sess){
        sess.upVoteCount++;
    }
    $scope.downVotecnt = function(sess){
        if(sess.upVoteCount>0)
        sess.upVoteCount--;
    }
});