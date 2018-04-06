eventsApp.controller('EventDetailsController',function($scope,eventDataService,$routeParams,$route,event){ // evnent is not service its reolve object                                                                                                                    // property 
    //$scope.event = eventDataService.getEvent($routeParams.eventId);
    
   $scope.event = event;
    
    $scope.reload = function(){
        $route.reload();
    }
});