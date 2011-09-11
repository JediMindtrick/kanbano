var WorkItem = Backbone.Model.extend({

  defaults: {
    "Location":  '',
    "Name":     '',
    "ValueStream": {}
  },
  
  getLocation: function(){
  	return this.get('Location');
  },

  getName: function(){
  	return this.get('Name');
  },

  move: function(newLoc){
  	//if it's in the last queue, newLoc will equal "WorkComplete"
  	//handle that here
  	
  	//get the queue
  	var valueStream = this.get('ValueStream');
  	var newQ = valueStream.getQueue(newLoc);
  	//try to put the work into the queue
  	if(newQ.acceptWork(this))
  	{
  		var oldQ = valueStream.getQueue(this.get('Location'));
  		oldQ.removeWork(this.getName());
	  	//on success change it's location
  		this.set({Location : newLoc});
  	}
  }
});

Kanbano.Model.WorkItem = WorkItem;