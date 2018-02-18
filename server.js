var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/electro');


var Electro = mongoose.model('Electro',mongoose.Schema({

	_id:String,
	ancestors:String,
	parent:String
	
}));

router.get('/api/electro/:id',function(res,req){

		var temp = [];
		temp=Electro.findOne({_id:req.params.id}).ancestors.toArray;//Electro is collection name
		function(err,temp)
		{

				for(var i=0;i<temp.length;i++)
				{
					if (err)
						res.send(err);
					else
						res.json(temp[i]);
				}

		}
	});	

app.listen(8000,function(){

	console.log("server is running at port 8000");
});	

		
