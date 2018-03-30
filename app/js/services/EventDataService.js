eventsApp.factory('eventDataService',function($http,$log,$resource){
    
    // $http retuns a promise which we are returning back via this service and the controller which will use this service will handle the success and
    // error
   var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}}); 
    
    return {
        
        // get using $http
        /*getEvents: function(){
            return $http({method:'GET',url:'/data/event/1'});       
        },*/
        
        // get using $resource
        getEvent: function(eventId){
          return $resource('/data/event/:id',{id:'@id'}).get({id:eventId});
        },
        
        save:function(event){
            event.id=999;
            return $resource('/data/event/:id',{id:'@id'}).save(event);
        },
        
        getAll:function(){
            return resource.query();    
        }
        
        
        
    }
});