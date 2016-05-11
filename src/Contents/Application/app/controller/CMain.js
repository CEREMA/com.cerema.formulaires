App.controller.define('CMain', {

	views: [
		"VMain",
        "VDemandeRepro"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			},
            "mainform button#demande_repro": {
                click: "demanderepro_onclick"
            },
            "VDemandeRepro button#btnOK": {
                click: "OK_onclick"
            }
		});
		
		App.init('VMain',this.onLoad);
		
	},
	doJobs: function(JOBS,id,cb)
	{
		var _p=this;
		App.MyService.import(JOBS[id],function() {
			if (JOBS[id+1]) _p.doJobs(JOBS,id+1,cb); else cb();
		});
	},    
    OK_onclick: function(me)
    {
        var JOBS=App.get('VDemandeRepro uploadfilemanager').getFiles();
        doJobs(JOBS,0,function(){
            alert('x');
        });
        
        App.DB.post('formulaires://demandes',{
            Name: Auth.User.firstname+' '+Auth.User.lastname,
            UserID: Auth.User.uid,
            subject: App.get('textfield#objet').getValue(),
            object: App.get('htmleditor#demande').getValue(),
            Date1: new Date(),
            status: 1
        },function(e,r){
        console.log(e);
            console.log(r);
        });
    },
    demanderepro_onclick: function(me)
    {
        App.view.create("VDemandeRepro",{modal: true}).show();
    },
	Menu_onClick: function(p)
	{
		if (p.itemId) {
			
		};			
	},

	onLoad: function()
	{
	   Auth.login(function(){
           
       });
	}
	
	
});
