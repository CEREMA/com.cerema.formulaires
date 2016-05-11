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
            }
		});
		
		App.init('VMain',this.onLoad);
		
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
