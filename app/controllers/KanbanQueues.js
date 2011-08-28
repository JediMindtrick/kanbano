Kanbano.Controllers.KanbanQueues = Backbone.Router.extend({
    routes: {
    	"": "index",
        "view/:workflow": "index",
        //"addItem/:queue/i:item":"addItem"
        "addItem/:queue/:item":"addItem"
    },
    
    addItem: function(queueId,itemId){
    	$('#appContainer').html('addItem controller');
    },
    
    index: function(workflowId) {    
 		var workflow = Kanbano.Model.Workflows[workflowId];
    	
    	new Kanbano.Views.KanbanQueuesIndex(workflow);
    }
});