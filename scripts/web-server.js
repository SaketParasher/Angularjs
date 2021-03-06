var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = new express();
var rootpath = path.normalize(__dirname+'/../'); // __dirname gives the path of current directory which is scripts folder and /../ above that is our
                                                 // app root folder

app.use(express.static(rootpath + '/app')); // this will tell express to serve the files inside app directory which are in rootpath/app/ without 
                                            // processing them at all. just pass them as they are

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/data/event/:id',events.get);
app.get('/data/event/',events.getAllEvents);
app.post('/data/event/:id',events.save);
app.get('*',function(req,res){ res.sendFile(rootpath+'/app/index.html')});

app.listen(3000,()=>{console.log('App listening at 3000')});


