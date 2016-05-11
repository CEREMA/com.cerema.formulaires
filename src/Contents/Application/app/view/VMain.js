App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,
			baseCls: 'cls-header',
			xtype: "Menu",
			itemId: "MenuPanel",
			menu: [
			]		
		},
		{
			region: "center",			
			split:true,
            tbar: [
            {
                xtype:"button",
                itemId: "ajouter_modification",
                text: "Demande repro",
                scale: "large",
                iconAlign: "top",
                iconCls: "add",
                hidden: false
            },
            {
                xtype:"button",
                itemId: "ajouter_modification",
                text: "Perte de badge",
                scale: "large",
                iconAlign: "top",
                iconCls: "add",
                hidden: false
            }
            ],            
			items: [
				{
					xtype: "button",
					itemId: "clickme",
					text: "Click me",
					margin: 20,
				}
			]
		}
	]
	
});
