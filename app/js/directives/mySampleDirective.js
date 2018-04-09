eventsApp.directive('sampledirective',function(){
   return{
       restrict:'E',
       scope:{},
       template:'<input type="text" ng-model="sampledata"/>{{sampledata}} <br>'
       //template:'<div><input type="text" ng-model="sampledata" /> {{sampledata}} <br/></div>'
   }
});