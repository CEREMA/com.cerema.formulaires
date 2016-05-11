App.view.define('VDemandeRepro', {
    extend: "Ext.window.Window",
    alias: "widget.TDemandeRepro",
    initComponent: function() {
        this.width = 800;
        this.height = 750;
        this.title = "Demande reprographie";
        this.bodyCls = "white";
        this.layout="vbox";
        this.items = [
            {
                xtype: "textfield",
                itemId: "objet"
            },
            {
                xtype: "htmlarea",
                itemId: "demande"
            },
            {
                xtype: ""
            }
        ];
        this.bbar = [
        ];
        this.callParent(arguments);
    }

});