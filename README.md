# controller routes
# sailsjs controller redirect to another controller
To use the parameters of other controller in the present controller.

a [Sails](http://sailsjs.org) application

Clone the repository and perform following steps:

cd /sailsjs-controller-redirect-to-another-controller
sudo npm install //to install the dependencies

After you finish installing the dependencies, 
##sails lift

Check : http://localhost:1337

Send a get request to http://localhost:1337/login

As you enter the url you get redirected to http://localhost:1337/new2
Even though we haven't defined routes.

##To pass a single parameter : 
In the login controller do this : 

    'index' : function(req,res){
		console.log('First Redirect');
		var param1 = "something";
		res.redirect('/login/new1/'+param1); //passing a single parameter Route : '/login/new1/:param1' : 'LoginController.new1'
	},
	//The parameter passed along with res.redirect is accesible to other controllers by the name of 'id'. To access with the user defined name. Define the route in login controller as : '/login/new1/:anur' : 'LoginController.new1'
	'new1': function(req,res){
		console.log('Second Redirect');
		//var param1 = req.param('id'); // retrieving the parameter, by default it is id,
		var param1 = req.param('param1'); // this will give undefined unless you define routes like : '/login/new1/:anur' : 'LoginController.new1'
		console.log(param1);
		res.redirect('/login/new2');

	},
	'new2': function(req,res){
		console.log('Final Screen');
		res.view();
	}
	
	
	
	##To pass a multiple parameters :
	
    'index' : function(req,res){
		console.log('First Redirect');
		var param1 = "something";
		var param2 = "else";
		res.redirect('/login/new1/'+param1+'/'+param2); // multiple params  Route : '/login/new1/:param1/:param2' : 'LoginController.new1'
	}, // Here we pass two params param1, param2
	'new1': function(req,res){
		console.log('Second Redirect');
		//var param1 = req.param('id'); // retrieving the parameter by default it is id,
		var param1 = req.param('param1'); // this will give undefined unless you define routes like : '/login/new1/:anur' : 'LoginController.new1'
		console.log(param1);
		var param2 = req.param('param2');
		console.log(param2);
		res.redirect('/login/new2');

	},
	'new2': function(req,res){
		console.log('Final Screen');
		res.view();
	}
	
	
	##Routes will be like :
	
    module.exports.routes = {
        '/': {
       view: 'homepage'
       },
       '/dashboard' : 'LoginController.index',
        '/login/new1/:param1' : 'LoginController.new1' //for single param
        '/login/new1/:param1/:param2' : 'LoginController.new1' //for multiple params
     };
