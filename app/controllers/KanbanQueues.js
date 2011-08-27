Kanbano.Controllers = Kanbano.Controllers || {};

Kanbano.Controllers.KanbanQueues = Backbone.Router.extend({
    routes: {
    	"": "index",
        "view/:workflow": "index",
        "addItem/:queue/i:item":"addItem"
    },
    
    addItem: function(queueId,itemId){
    	if(Kanbano.Model.Queues.indexOf(queueId) != -1){
    		var locQueue = Kanbano.Model.Queues[queueId]; 
    	}
    },
    
    index: function(workflowId) {
    	/*Simulate loading a workflow for right now...*/
    	var testWork = new WorkItem({Name:"TestWork",Location:"TestRequestQueue"});
    	var testQueue = new KanbanQueue({Name:'TestRequestQueue'});
    	
 		var workflow = Kanbano.Model.Workflows['TestWorkflow'] = [];
	    	
    	workflow.push(testQueue);
    	//var workflow = Kanbano.Model.Workflows[testQueue.getName()] = testQueue; 
    	testQueue.acceptWork(testWork);
    	
    	new Kanbano.Views.KanbanQueuesIndex(workflow);
    }
});