eventsApp.controller('MainMenuController',function($scope,$location){
   
       /* console.log('absUrl :- '+$location.absUrl());
        console.log('Protocol :- '+$location.protocol());
        console.log('Port :- '+$location.port());
        console.log('Host :- '+$location.host());
        console.log('Path :- '+$location.path());
        console.log('Search :- '+$location.search()); // search is an object which contains queryString portion in key value format
        console.log('Hash :- '+$location.hash()); // hash is whatever comes after # sign
        console.log('Url :- '+$location.url());
        *///console.log('Url :- '+$location);
    
    
    $scope.createEvent = function(){
        //$location.replace(); // will not store the current view in history
        $location.url('/newEvent');
    }
});