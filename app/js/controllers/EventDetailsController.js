eventsApp.controller('EventDetailsController',function($scope,eventDataService,$routeParams){
    $scope.event = eventDataService.getEvent($routeParams.eventId);
});