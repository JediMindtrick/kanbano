// Matchers should throw an error when they get an unexpected result.
var Assert =  YUITest.Assert;
var Kanbano = null;

var getApp = function(){
	var toReturn = document.getElementById('browser').contentWindow.Kanbano;
	
	return toReturn;
};

ramble.match(/^the application is loaded$/, function() {
	
	var ms = 5000;
	ramble.retryOnFailWithinMilliseconds = ms;
	
  // code
  	this.visit('/kanbano/app.html');
 
	Kanbano = getApp();
	
	Assert.isNotUndefined(Kanbano,'Unable to load app in a timely manner');
});

ramble.match(/^I have a piece of work in a queue$/, function() {
	var ms = 5000;
	ramble.retryOnFailWithinMilliseconds = ms;
	Kanbano = getApp();
	
  	/*Simulate loading a workflow for right now...*/
	var testWork = new Kanbano.Model.WorkItem({Name:"TestWork",Location:"TestRequestQueue"});
	var testQueue = new Kanbano.Model.KanbanQueue({Name:'TestRequestQueue'});
	var workflow = Kanbano.Model.Workflows['TestWorkflow'] = [];
		
	workflow.push(testQueue);
	testQueue.acceptWork(testWork);
	
	new Kanbano.Views.KanbanQueuesIndex(workflow);
  
	Assert.areEqual(1,this.find('#TestQueue #TestWork').length);
});

ramble.match(/^the location of the work is not in the last queue$/, function() {
  	var ms = 5000;
	ramble.retryOnFailWithinMilliseconds = ms;
	Kanbano = getApp();
  
  	var lastQueueId = this.find('.kanbanqueue:last').attr('id');
  	var itemQueueId = this.find('#TestWork').closest('.kanbanqueue').attr('id');
 	Assert.areNotEqual(lastQueueId,itemQueueId);
});

ramble.match(/^I advance the work$/, function() {
  // code
});

ramble.match(/^the work will move into the next queue$/, function() {
  // code
});

ramble.match(/^the work will no longer exist in the old queue$/, function() {
  // code
});