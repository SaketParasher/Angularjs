eventsApp.controller('EditEventController',function EditEventController($scope,eventDataService){
    
    $scope.saveEvent = function(evt,newForm){
        if(newForm.$valid){
                /*eventDataService.saveEvents(newForm).
                    success(function(data,status,header,config){
                        console.log(data);
                        console.log(status);
                });*/
            console.log(evt);
            eventDataService.save(evt)
                .$promise.then(
                function(response){console.log('Success',response)},
                function(response){console.log('Failure',response)}
            );
        }      
    };
    
    $scope.cancelEvent = function(){
        window.location = './EventDetails.html';
    };
    
});