/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'index' : function(req,res){
		console.log('Working');
		var anur = "something";
		var na = "else";
		res.redirect('/login/new1/'+anur); //passing a single parameter Route : '/login/new1/:anur' : 'LoginController.new1'
		//res.redirect('/login/new1/'+anur+'/'+na); // multiple params  Route : '/login/new1/:anur/:na' : 'LoginController.new1'
	},
	'new1': function(req,res){
		console.log('Working 2');
		//var name = req.param('id'); // retrieving the parameter by default it is id,
		var name = req.param('anur'); // this will give undefined unless you define routes like : '/login/new1/:anur' : 'LoginController.new1'
		console.log(name);
		//var na = req.param('na');
		//console.log(na);
		res.redirect('/login/new2');

	},
	'new2': function(req,res){
		console.log("three");
		res.view();
	}
};

