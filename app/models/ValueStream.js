var ValueStream = Backbone.Model.extend({

	defaults: {
    	"Queues":  [],
		"Name":   ''
  	},

  	getQueues: function(){
  		return this.get('Queues');
  	},

  	getName: function(){
  		return this.get('Name');
  	},
  	
  	getWorkItem: function(id){
  		var toReturn = null;
  		
  		var queues = this.get('Queues');
  		//each queue
  		for(var i = 0, k = queues.length; i < k; i++){
  			var items = queues[i].getItems()
  			//each item in the queue
  			for(var j = 0, o = items.length; j < o; j++){
  				//id *should* be unique!!! need a way to ensure this...
  				var name = items[j].getName();
  				if(name == id){
  					toReturn = items[j];
  					break;
  				}
  			}
  		}
  		
  		return toReturn;
  	},
  	
  	getQueue: function(id){
  		var toReturn = null;
  		
  		var queues = this.get('Queues');
  		//each queue
  		for(var i = 0, k = queues.length; i < k; i++){
  			if(queues[i].getName() == id){
  				toReturn = queues[i];
  				break;
  			}
  		}
  		
  		return toReturn;
  	}
});

Kanbano.Model.ValueStream = ValueStream;