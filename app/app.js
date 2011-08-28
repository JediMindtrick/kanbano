Kanbano = {
    Views: {},
    Controllers: {},
    Model: {
    	ValueStreams: {}
    },
    Resources: {},
    init: function() {
        new Kanbano.Controllers.KanbanQueues();
		var started = Backbone.history.start({pushState: false, root: "/kanbano/"});
    }
};