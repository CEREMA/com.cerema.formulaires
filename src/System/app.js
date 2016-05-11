App = {
	init: function(app,server) {
		app.use('/tmp',server.static(__dirname + require('path').sep+'tmp'));	
		app.post('/',app.UPLOAD.any(),function(req,res,next) {
			App.upload.up(req,res);
		});        
	}
};

module.exports = App;