Ext.application({
	name: 'PNL',
	appFolder : 'app',
	
	requires: [
		 'Ext.tab.*',
		'Ext.window.*',
		'Ext.tip.*',
		'Ext.layout.container.Border'
	],
	createViewport:	function(notifications){
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [
				{
                    region: 'west',
                    title: 'Navigation',
                    width: 200,
                    split: true,
                    collapsible: true,
                    floatable: false
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'Bogus Tab',
                        html: 'Hello world 1'
                    }, {
                        title: 'Another Tab',
                        html: 'Hello world 2'
                    }, {
                        title: 'Closable Tab',
                        html: 'Hello world 3',
                        closable: true
                    }]
                }
			]
		});
	},
	launch: function() {
		this.createViewport();
	}
});
