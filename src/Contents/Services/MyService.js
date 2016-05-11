
MyService = {
	import: function(o,cb) {
        App.upload.reader(o.docId, function(err,buffer) {        
            App.DB.post('formulaires://docs',{
                docId: o.docId,
                _blob: 'data:'+o.filetype+';base64,'+buffer.toString('base64'),
                filename: o.filename,
                type: o.filetype,
                size: o.filesize
            })
        });
    }
}

module.exports = MyService;
