eventsApp.factory('eventDataService',function($http,$log,$resource){
    
    // $http retuns a promise which we are returning back via this service and the controller which will use this service will handle the success and
    // error
    
    return {
        /*getEvents: function(){
            return $http({method:'GET',url:'/data/event/1'});       
        },*/
        
        getEvent: function(){
          return $resource('/data/event/:id',{id:'@id'}).get({id:1});
        },
        saveEvents: function(formData){
        
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
    }
});