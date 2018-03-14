var express = require('express');
var path = require('path');

var app = new express();
var rootpath = path.normalize(__dirname+'/../'); // __dirname gives the path of current directory which is scripts folder and /../ above that is our
                                                 // app root folder

app.use(express.static(rootpath + '/app')); // this will tell express to serve the files inside app directory which are in rootpath/app/ without 
                                            // processing them at all. just pass them as they are

app.listen(3000,()=>{console.log('App listening at 3000')});


