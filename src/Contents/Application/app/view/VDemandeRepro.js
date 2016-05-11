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
            
        ];
        this.bbar = [
        ];
        this.callParent(arguments);
    }

});