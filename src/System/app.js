App = {
	init: function(app,server) {
		app.use('/tmp',server.static(__dirname + require('path').sep+'tmp'));	
		app.post('/',app.UPLOAD.any(),function(req,res,next) {
			App.upload.up(req,res);
		});
		app.get('/docs/*',function(req,res) {
			var ff=req.originalUrl;
			console.log('select _blob from docs where docId="'+ff+'"');
			App.using('db').query('dashboard','select _blob from docs where docId="'+ff+'"',function(err,response) {
				if (response.length>0) {
					if (response[0]._blob=="") {
						res.end('Aucun document lié.');
					} else {
						var buf = new Buffer(response[0]._blob.split(';base64,')[1], 'base64');
						res.set('Content-disposition', 'inline; filename="Doc.pdf"');
						res.set("Content-Type", response[0]._blob.split(';base64')[0].split('data:')[1]);
						res.end(buf);
					}
				} else {
					var b64=App.upload.toBase64(ff);
					var buf=new Buffer(b64.split(';base64,')[1], 'base64');
					res.set('Content-disposition', 'inline; filename="Doc.pdf"');
					res.set("Content-Type", b64.split(';base64')[0].split('data:')[1]);
					res.end(buf);
				}
			});
		});			
	}
};

module.exports = App;