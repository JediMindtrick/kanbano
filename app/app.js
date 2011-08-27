/*
var Kanbano = {
    //Views: {},
    //Controllers: {},
    init: function() {
        new Kanbano.Controllers.KanbanQueues();
        Backbone.history.start();
    }
};

Kanbano.resources = {};

Kanbano.resources.scripts = [
	'models/KanbanQueue.js',
	'models/WorkItem.js',
	'controllers/KanbanQueues.js',
	'views/KanbanQueuesIndex.js'
];

var App = Kanbano;

Kanbano.run = function () {	
 	$.each(Kanbano.resources.scripts,function(index,item){
 		$.getScript(item);
 	});

	

	Kanbano.init();
};
*/

var Kanbano = {
    Views: {},
    Controllers: {},
    Model: {
    	Workflows: {}
    },
    init: function() {
        new Kanbano.Controllers.KanbanQueues();
        Backbone.history.start();
    }
};