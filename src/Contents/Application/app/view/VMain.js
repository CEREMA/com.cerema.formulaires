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
            layout: "fit",
            tbar: [
            {
                xtype:"button",
                itemId: "demande_repro",
                text: "Demande repro",
                scale: "large",
                iconAlign: "top",
                iconCls: "Print",
                hidden: false
            },
            {
                xtype:"button",
                itemId: "perte_badge",
                text: "Perte de badge",
                scale: "large",
                iconAlign: "top",
                iconCls: "add",
                hidden: false
            }
            ],            
			items: [
				{
					xtype: "grid",
					columns: [{
                        header: "Demandes",
                        dataIndex: "subject",
                        flex: 1
                    },
                    {
                        header: "Dépôt",
                        dataIndex: "Date1",
                        width: 120
                    }, 
                    {
                        header: "En cours",
                        dataIndex: "Date2"  ,
                        width: 120
                    },
                    {
                        header: "Traité",
                        dataIndex: "Date3"  ,
                        width: 120
                    },
                    {
                        header: "Statut",
                        dataIndex: "status",
                        width: 120
                    }],
                    border: false,
                    store: App.store.create("formulaires://demandes",{autoLoad: true})
				}
			]
		}
	]
	
});
