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
	
	
	Kanbano.Model.ValueStreams['TestValueStream'] = null;
  	/*Load a value stream into the model*/
  	
  	//first queue
	var testWork = new Kanbano.Model.WorkItem({Name:"TestWork",Location:"TestRequestQueue"});
	var testQueue = new Kanbano.Model.KanbanQueue({Name:'TestRequestQueue'});
	testQueue.acceptWork(testWork);

	//second queue
	var testQueue2 = new Kanbano.Model.KanbanQueue({Name:'TestInProgressQueue'});
	testQueue2.set({'Items':[]});
	
	//value stream
	var testStream = new Kanbano.Model.ValueStream({Name:'TestValueStream'});

	//add queues to the value stream	
	var queues = testStream.getQueues();
	queues.push(testQueue);
	queues.push(testQueue2);
	
	//add value stream into the model
	Kanbano.Model.ValueStreams['TestValueStream'] = testStream;
	
	var foo = new Kanbano.Views.KanbanQueuesIndex(testStream);
  
	Assert.areEqual(1,this.find('#TestRequestQueue #TestWork').length);
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
  	this.find('#TestWork button.Next').click();
});

ramble.match(/^the work will move into the next queue$/, function() {
  // code
});

ramble.match(/^the work will no longer exist in the old queue$/, function() {
  // code
});