Kanbano.Controllers.KanbanQueues = Backbone.Router.extend({
    routes: {
    	"": "index",
        "view/:workflow": "index",
        "addItem/:queue/:item":"addItem"
    },
    
    addItem: function(queueId,itemId){
    	$('#appContainer').html('addItem controller');
    },
    
    index: function(workflowId) {    
 		var workflow = Kanbano.Model.ValueStreams[workflowId];
    	
    	new Kanbano.Views.KanbanQueuesIndex(workflow);
    }
});