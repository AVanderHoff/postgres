var Level1 = require('../models/level1.js');
var Level2 = require('../models/level2.js');
var Level3 = require('../models/level3.js');
var path = require('path');


module.exports = function(app){



app.get('/', function(req,res) {
	

	res.sendFile(path.join(__dirname + '/../views/home.html'));


	// Burger.findAll({
	// 			where: {
	// 				devoured: 1 
	// 			}
	// 		}).then(function(result){
				
			
	// 			Burger.findAll({
	// 			where: {
	// 				devoured: 0
	// 			}
	// 		}).then(function(result2){
				
	// 			var obj = {
	//  			dataFalse:result,
	//  			dataTrue:result2
	//  			}

	//  		res.render('index',obj);

	// 		})

	// 		})

});

app.get('/part',function(req,res){
	res.sendFile(path.join(__dirname + '/../views/part.html'))
})

app.put('/update', function(req,res){

    Burger.create({
			burger_name: req.body.user_plan ,
			devoured: 1
		}).then(function(){

			res.redirect('/');
		});

});

app.get('/part/:id', function(req,res){

	var id = req.params.id ;
	console.log(id);

	obj = {top:[],
		   bottom:[]
	};




	switch(id){
		case "1":Level2.findAll({}).then(function(result){ 
          			obj.top = result;
          			res.json(obj);
      			 });
      	break;
		case "2":Level1.findAll({}).then(function(result){
				 	Level3.findAll({}).then(function(result2){
				 		obj.top = result;
				 		obj.bottom = result2;
				 		res.json(obj);
				 	})
				})
		break;
		case "3":Level2.findAll({}).then(function(result){
					obj.top = result;
					res.json(obj);
				})

		}
  
     














  });
	



  
  











app.put('/change', function(req,res){

 
	var key = Object.keys(req.body);

	Burger.update(
  		{
    		devoured: 0
  		},
  		{
    		where: { id : key }
  		})
  		.then(function () { 

  		res.redirect('/');
  		});



});






}