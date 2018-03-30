eventsApp.controller('CompileSampleController',function($scope,$compile,$parse){
    
    var fn = $parse('1+2');
    console.log(fn());
    
    var getter = $parse('events.name');
    var context1 = {events:{name:'nG Bootcamp'}};
    var context2 = {events:{name:'Code camp'}};
    
    console.log(getter(context1));
    console.log(getter(context2));
    
    
    $scope.appendDivToElement = function(markup){
        return $compile(markup)($scope).appendTo(angular.element('#appendHere'))
        
    };
    
});