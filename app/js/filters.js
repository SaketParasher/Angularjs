
/*   CUSTOM DURATION FILTER*/

eventsApp.filter('durationFilter',function(){
    return function(duration){
        switch(duration){
            case 1:
                return 'Half Hour';
            case 2:
                return '1 Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
            default:
                return 'ffff';
        }
    }
    
});

eventsApp.filter('eventFilter',function(){
    return function(event,keyword){
        var eventsArr = [];
        if(keyword == '')
            return event;
        else{
            for(var i=0;i<event.length;i++){
                if((event[i].name).toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1)
                    eventsArr.push(event[i]);
            }
            return eventsArr;
        }
         
    }
    
});
