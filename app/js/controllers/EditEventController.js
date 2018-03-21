eventsApp.controller('EditEventController',function EditEventController($scope,eventDataService){
    
    $scope.saveEvent = function(evt,newForm){
        if(newForm.$valid){
                eventDataService.saveEvents(newForm).
                    success(function(data,status,header,config){
                        console.log(data);
                        console.log(status);
                });
        }      
    };
    
    $scope.cancelEvent = function(){
        window.location = './EventDetails.html';
    };
    
});