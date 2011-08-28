Kanbano = {
    Views: {},
    Controllers: {},
    Model: {
    	Workflows: {}
    },
    Resources: {},
    init: function() {
        new Kanbano.Controllers.KanbanQueues();
		var started = Backbone.history.start({pushState: false, root: "/kanbano/"});
    }
};