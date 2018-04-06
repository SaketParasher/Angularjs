eventsApp.controller('EventListController',function($scope,eventDataService){
    $scope.sortorder = 'name';
    $scope.searchKey='';
    $scope.searchKeyWord='';
    $scope.setKeyword = function(){
        $scope.searchKey = $scope.searchKeyWord;
    }
    $scope.events = eventDataService.getAll();
});