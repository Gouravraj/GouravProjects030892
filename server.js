var express = require('express');
var app=express();
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emp');


var Electro = mongoose.model('Electro',mongoose.Schema({

	_id:String,
	name:String,
	ancestors:String,
	
	parent:String,
	
}));

//app.get('/',function(req,res){

//	res.send("Hello world!");
//})   

app.get('/api/electro/:_id',function(res,req){

		var temp= [];
		Electro.findOne({_id:req.params.id}).ancestors.toArray(
		//Electro is collection name
		function(err,data)
		{
				for(var i=0;i<data.length;i++)
					temp.push(data[i]);)

				if(err					
					res.send(err);
				res.json(data);	

		});
});
		
	
		
app.listen(8000,function(){

	console.log("server is running.....");
});	

		
