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
					columns: [
                    {
                        header: "Agent",
                        dataIndex: "Name"  ,
                        width: 250,
                        hidden: true
                    },                        
                    {
                        header: "Demandes",
                        dataIndex: "subject",
                        flex: 1
                    },
                    {
                        header: "Dépôt",
                        dataIndex: "Date1",
                        renderer:  Ext.util.Format.dateRenderer('d/m/Y - G:i'),
                        width: 120
                    }, 
                    {
                        header: "En cours",
                        dataIndex: "Date2"  ,
                        renderer:  Ext.util.Format.dateRenderer('d/m/Y - G:i'),
                        width: 120
                    },
                    {
                        header: "Traité",
                        dataIndex: "Date3"  ,
                        renderer:  Ext.util.Format.dateRenderer('d/m/Y - G:i'),
                        width: 120
                    },
                    {
                        header: "Statut",
                        dataIndex: "status",
                        width: 120,
                        renderer: function(value) {
                            if (value==1) return '<div style="color:red">Déposé</div>';
                            if (value==2) return '<div style="color:orange">En cours de traitement</div>';
                            if (value==3) return '<div style="color:red">Traité.</div>';
                        }
                    }],
                    border: false,
                    store: App.store.create({fields:[],data:[]})
				}
			]
		}
	]
	
});
