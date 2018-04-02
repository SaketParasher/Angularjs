eventsApp.controller('EventListController',function($scope,eventDataService){
    $scope.sortorder = 'name';
    $scope.searchKey='';
    $scope.events = eventDataService.getAll();
});