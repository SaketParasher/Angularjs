'use strict';

var eventsApp = angular.module('eventsApp',['ngResource','ngRoute'])
            .config(function($routeProvider,$locationProvider){
                $routeProvider.when('/newEvent',
                    {
                      templateUrl:'templates/NewEvent.html',
                       controller:'EditEventController'
                    });
                $routeProvider.when('/events',
                    {
                      templateUrl:'templates/EventList.html',
                       controller:'EventListController'
                    });
                $routeProvider.when('/events/:eventId',
                    {
                      templateUrl:'templates/EventDetails.html',
                       controller:'EventDetailsController',
                       resolve:{
                           event : function($route,$routeParams, eventDataService){
                               //return eventDataService.getEvent($routeParams.eventId).$promise;
                               return eventDataService.getEvent($route.current.pathParams.eventId).$promise;
                           }
                       }
                    });
                $routeProvider.when('/sampleDirective',{
                    templateUrl:'templates/SampleDirective.html',
                    controller:'sampleDirectiveController'
                });
                $routeProvider.otherwise({redirectTo:'/events'});
                
                $locationProvider.html5Mode(true);
         });
                
