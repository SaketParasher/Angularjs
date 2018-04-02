var fs = require('fs');

module.exports.get = function(req,res){
    var event  =  fs.readFileSync('../app/data/event/'+req.params.id+'.json','utf8');
    res.setHeader('Content-Type','application/json');
    res.send(event);
}

module.exports.save = function(req,res){
    var event = req.body;
    fs.writeFileSync('../app/data/event/'+req.params.id+'.json',JSON.stringify(event));
    res.send(event);
}

module.exports.getAllEvents = function(req,res){
    var path = '../app/data/event/';
    var files = [];
    
    try{
        files = fs.readdirSync(path);
    }catch(e){
        console.log('Exception in reading Directory :-> '+e);
    }
    
    console.log(files);
    var results = "[";
    
    for(var idx =0;idx<files.length;idx++){
        if(files[idx].indexOf('.json') == 1){
            results += fs.readFileSync(path+'/'+files[idx]);
            results += ',';
        }
    }
    results = results.substr(0,results.length-1);
    results += "]";
    
    res.setHeader('Content-Type','application/json');
    res.send(results);
    res.end();
}