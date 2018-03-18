eventsApp.controller('EditEventController',function EditEventController($scope){
    
    $scope.saveEvent = function(evt,newForm){
        if(newForm.$valid){
            alert(evt.name+' Saved!!');    
        }      
    };
    
    $scope.cancelEvent = function(){
        window.location = './EventDetails.html';
    };
    
});