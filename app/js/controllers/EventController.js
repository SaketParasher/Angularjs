'use strict';

eventsApp.controller('EventController',function EventController($scope){
    $scope.sortorder = 'name';
    $scope.query = '';
    $scope.event = {
        name:'Angular Bootcamp',
        date:'01/01/2019',
        time:'10:30 am',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCObOJlQMPu-kDENE9pxiC2dBAJomNMFneqBrdV83Q7ygqG81x-g',
        location:{
            address:'Google Headquarter',
            city:'Mountain View',
            province: 'CA'
        },
        sessions:[
            {
                name:'Directive Masterclass',
                creator:'Bob Smith',
                duration:1,
                level:'Advanced',
                abstract:'In this session you will learn in and outs of Directives.',
                upVoteCnt:5
            },
            {
                name:'Scope for Fun and Profit',
                creator:'Bob Marley',
                duration:2,
                level:'Intermediate',
                abstract:'In this session you will learn about nG Scope service.',
                upVoteCnt:0
            },
            {
                name:'Well Behaved Controllers',
                creator:'Ahuja Wallia',
                duration:3,
                level:'Introductory',
                abstract:'Control the Controllers functionality and behaviour',
                upVoteCnt:0
            }
        ]
    };
   
    $scope.upVoteCnt = function(session){
        session.upVoteCnt++;
    };
    $scope.downVoteCnt = function(session){
        if(session.upVoteCnt >0)
            session.upVoteCnt--;
    }
    
});