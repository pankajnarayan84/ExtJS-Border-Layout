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
                        title: 'Tab 1',
                        html: 'Hello world'
                    }, {
                        title: 'Tab 2',
                        html: 'Closable Tab',
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
