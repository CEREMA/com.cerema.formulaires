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
			"mainform grid": {
				itemdblclick: "grid_dblclick"	
			},
			"mainform checkboxfield": {
				change: function (checkbox, newVal, oldVal) {
					if (Auth.User.profiles.indexOf('REPRO')>-1) {
						App.get('mainform grid').columns[0].show();
						var ccc="";
						if (App.get('mainform checkboxfield').getValue()) ccc="&status<3";
						var store=App.store.create("formulaires://demandes?type=Reprographie"+ccc);
						App.get('mainform grid').bindStore(store);
						App.get('mainform grid').store.load();
					};
					if (Auth.User.profiles.length==0) {
						var ccc="";
						if (App.get('mainform checkboxfield').getValue()) ccc="&status<3";
						var store=App.store.create("formulaires://demandes?UserID="+Auth.User.uid+ccc);
						App.get('mainform grid').bindStore(store);
						App.get('mainform grid').store.load();                        
					};                 
				}	
			},
            "VDemandeRepro": {
                show: "VDemandeRepro_onshow"
            },
            "VDemandeRepro button#btnOK": {
                click: "OK_onclick"
            },
			"VDemandeRepro uploadfilemanager": {
				itemdblclick: "up_onclick"
			},
			"VDemandeRepro button#closeme": {
				click: "closeme_onclick"
			}			
		});
		
		App.init('VMain',this.onLoad);
		
	},
	closeme_onclick: function(me) {
		if (Auth.User.profiles.indexOf('REPRO')>-1) {
			App.DB.post('formulaires://demandes',{
				id: me.up('window').ItemID,
				status: 3,
				Date3: new Date()
			},function(e,r){
				me.up('window').close();
				App.get('mainform grid').getStore().load();
			});
			me.status=3;
		};		
	},
	up_onclick: function(p, record) {
		var iframe=document.createElement('iframe');
		iframe.src="/docs/"+record.data.docId;
		document.getElementsByTagName('body')[0].appendChild(iframe);
	},
	grid_dblclick: function(me,store) {
		if (store.data.type=="Reprographie") App.view.create("VDemandeRepro",{modal: true,status:store.data.status,ItemID:store.data.id}).show().center();
	},
    VDemandeRepro_onshow: function(me) {
		if (me.ItemID) {
			if (me.status*1>1) {
				App.get(me,'button#btnOK').hide();
				App.get(me,'uploadfilemanager').setReadOnly(true);
				App.get(me,'textfield#objet').setReadOnly(true);
				App.get(me,'htmleditor#demande').setReadOnly(true);
			};
			App.DB.get('formulaires://demandes?id='+me.ItemID,me,function(response){
				App.get(me,"uploadfilemanager").setFiles(JSON.parse(response.data[0].files));
			});
			if (me.status*1==1) {
				if (Auth.User.profiles.indexOf('REPRO')>-1) {
					App.DB.post('formulaires://demandes',{
						id: me.ItemID,
						status: 2,
						Date2: new Date()
					},function(e,r){
						me.up('window').close();
						App.get('mainform grid').getStore().load();
					});
					me.status=2;
					App.get(me,'button#closeme').show();
				};
			};
			if (me.status*1==2) {
				App.get(me,'button#closeme').show();
			}
		};	
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
        this.doJobs(JOBS,0,function(){
            App.DB.post('formulaires://demandes',{
                Name: Auth.User.firstname+' '+Auth.User.lastname,
                UserID: Auth.User.uid,
                subject: App.get('textfield#objet').getValue(),
                object: App.get('htmleditor#demande').getValue(),
                Date1: new Date(),
                status: 1,
                files: JSON.stringify(JOBS)
            },function(e,r){
                App.notify('Votre demande a bien été enregistrée');
				App.get('mainform grid').getStore().load();
				me.up('window').close();
            });             
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
			if (Auth.User.profiles.indexOf('REPRO')>-1) {
				App.get('mainform grid').columns[0].show();
				var ccc="";
				if (App.get('mainform checkboxfield').getValue()) ccc="&status<3";
				var store=App.store.create("formulaires://demandes?type=Reprographie"+ccc);
				App.get('mainform grid').bindStore(store);
				App.get('mainform grid').store.load();
			};
			if (Auth.User.profiles.length==0) {
				var ccc="";
				if (App.get('mainform checkboxfield').getValue()) ccc="&status!=3";
				var store=App.store.create("formulaires://demandes?UserID="+Auth.User.uid+ccc);
				App.get('mainform grid').bindStore(store);
				App.get('mainform grid').store.load();                        
			};           
       });
	}
	
	
});
