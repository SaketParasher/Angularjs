'use strict';

eventsApp.controller('EventController',function EventController($scope,$log,eventDataService){
    $scope.sortorder = 'name';
    $scope.query = '';
  /*
  // USING $http
  eventDataService.getEvents().
        success(function(data){
            $scope.event = data;    
    }).
        error(function(data,status,header,config){
            $log.warn(data,status,header());
    });
*/
    
    // using $resource for get Request
    $scope.event = eventDataService.getEvent();
    
    $scope.upVoteCnt = function(session){
        session.upVoteCount++;
    };
    $scope.downVoteCnt = function(session){
        if(session.upVoteCnt >0)
            session.upVoteCount--;
    }
    
});

