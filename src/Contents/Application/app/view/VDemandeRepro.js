App.view.define('VDemandeRepro', {
    extend: "Ext.window.Window",
    alias: "widget.VDemandeRepro",
    initComponent: function() {
        this.width = 800;
        this.height = 550;
        this.title = "Demande reprographie";
        this.bodyCls = "white";
        this.layout="vbox";
        this.items = [
            {
                xtype: "textfield",
                itemId: "objet",
                width: "100%",
                padding: 5,
                fieldLabel: "Sujet"
            },
            {
                xtype: "htmleditor",
                itemId: "demande",
                height: 250,
                width: "100%",
                padding: 5,
                fieldLabel: "Description du travail demandé"
            },
            {
                xtype: "uploadfilemanager",
                padding: 10,
                itemId: "up",
                flex: 1,
                height: 120,
                width: "100%",
                uploader: '/upload',
                hidden: false,
                padding: 5,
                fieldLabel: "Pièce(s) jointe(s)"
            }
        ];
        this.bbar = [
        ];
        this.callParent(arguments);
    }

});