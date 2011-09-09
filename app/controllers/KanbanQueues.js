Kanbano.Controllers.KanbanQueues = Backbone.Router.extend({
    routes: {
    	"": "index",
        "view/:workflow": "index",
        "addItem/:queue/:item":"addItem",
        "moveItem/:item/:destination" : "moveItem"
    },
    
    addItem: function(queueId,itemId){
    	$('#appContainer').html('addItem controller');
    },
    
    moveItem: function(item,destination){
    	$('#appContainer').html('moveItem controller');
    },
    
    index: function(workflowId) {    
 		var workflow = Kanbano.Model.ValueStreams[workflowId];
    	
    	new Kanbano.Views.KanbanQueuesIndex(workflow);
    }
});