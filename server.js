var express = require("express");

var bodyparser=require("body-parser");

var app=express();

var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost/emp');

var Employee = mongoose.model('Employee',mongoose.Schema({

	name:String,
	dept:String,
	status:String,
	Salary:String,
	contact:String


}));

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//app.use(express.static(_dirname + '/client'));

app.get('/api/employees',function(req,res){
	Employee.find(function(err,employees) {
		// body...
		if(err)
				res.send(err);
			res.json(employees);
	});
});


app.get('/api/employees/:id',function(req,res){

	Employee.findOne({_id:req.params.id},function(err,employees) {
		
		if(err)
				res.send(err);
			res.json(employees);
	});
});

app.post('/api/employees',function(req,res){

	Employee.create(req.body,function(err,employees) {
		
		if(err)
				res.send(err);
			res.json(employees);
	});
});
app.delete('/api/employees/:id',function(req,res){

	Employee.findOneAndRemove({_id:req.params.id},function(err,employees) {
		
		if(err)
				res.send(err);
			res.json(employees);
	});
});
app.delete('/api/employees/:id',function(req,res){

	Employee.findOneAndUpdate ({_id:req.params.id},function(err,employees) {
		
		if(err)
				res.send(err);
			res.json(employees);
	});
});

app.put('/api/employees/:id',function(req,res){
	var query = {
		name:req.body.name,
		Dept:req.body.Dept,
		status:req.body.status,
		Salary:req.body.Salary,
		contact:req.body.contact
};
	Employee.findOneAndUpdate({_id:req.params.id},query,function(err,employees) {
		
		if(err)
				res.send(err);
			res.json(employees);
	});
});
app.listen(8000,function(){

	console.log("server is running at port 8000........");
});	