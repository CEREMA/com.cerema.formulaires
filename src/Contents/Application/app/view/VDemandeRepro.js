App.view.define('VDemandeRepro', {
    extend: "Ext.window.Window",
    alias: "widget.VDemandeRepro",
    initComponent: function() {
        this.width = 800;
        this.height = 750;
        this.title = "Demande reprographie";
        this.bodyCls = "white";
        this.layout="vbox";
        this.items = [
            {
                xtype: "textfield",
                itemId: "objet",
                width: "100%",
                padding: 5
            },
            {
                xtype: "htmleditor",
                itemId: "demande",
                height: 250,
                width: "100%"
            }
        ];
        this.bbar = [
        ];
        this.callParent(arguments);
    }

});