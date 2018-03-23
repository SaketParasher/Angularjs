eventsApp.factory('eventDataService',function($http,$log,$resource){
    
    // $http retuns a promise which we are returning back via this service and the controller which will use this service will handle the success and
    // error
    
    
    return {
        
        // get using $http
        /*getEvents: function(){
            return $http({method:'GET',url:'/data/event/1'});       
        },*/
        
        // get using $resource
        getEvent: function(){
          return $resource('/data/event/:id',{id:'@id'}).get({id:1});
        },
        
        // post/save using $http
/*        saveEvents: function(formData){
        
            var frmData = {
                name:formData.eventName.$modelValue,
                date:formData.eventDate.$modelValue,
                time:formData.eventTime.$modelValue,
                location:{
                    address:formData.eventLocation.$modelValue,
                    city:formData.eventCity.$modelValue,
                    province:formData.eventProvince.$modelValue
                },
                imageUrl:formData.imgURL.$modelValue
            };
            
           return  $http({
                url:'/data/event/101',
                method:'POST',
                data:frmData
            });    
        }
        */
        // post/save using $resource
        
        save:function(event){
            event.id=999;
            return $resource('/data/event/:id',{id:'@id'}).save(event);
        }
        
    }
});