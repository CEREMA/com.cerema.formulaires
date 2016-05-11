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
            "VDemandeRepro button#OK": {
                click: "OK_onclick"
            }
		});
		
		App.init('VMain',this.onLoad);
		
	},
    OK_onclick: function(me)
    {
        App.DB.post('formulaires://demandes',{
            UserID: Auth.User.firstName+' '+Auth.User.lastName,
        },function(e,r){
            
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
           alert('auth');
       });
	}
	
	
});
