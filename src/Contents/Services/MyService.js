
MyService = {
	import: function(o,cb) {
        var db=MyService.using('db');
        App.upload.reader(o.docId, function(err,buffer) {        
            db.post('formulaires','docs',{
                docId: o.docId,
                _blob: 'data:'+o.filetype+';base64,'+buffer.toString('base64'),
                filename: o.filename,
                type: o.filetype,
                size: o.filesize
            },cb)
        });
    }
}

module.exports = MyService;
