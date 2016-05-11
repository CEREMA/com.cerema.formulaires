
MyService = {
	import: function(o,cb) {
        console.log(o);
        cb();
        /*App.upload.reader(o.docId, function(err,buffer) {        
            App.DB.post('formulaires://docs',{
                docId: o.docId,
                _blob: 'data:;base64,'+buffer.toString('base64'),
                filename: ,
                type: ,
                size: 
            })
        });*/
    }
}

module.exports = MyService;
