//var ValueStream = Backbone.Model.extend({
var ValueStream = Backbone.Collection.extend({
	model: KanbanQueue,
 	localStorage: new Store("Streams"),
 	
 	initialize: function(coll,options){
  		if(options != undefined && options.Name != undefined){
  			this.Name = options.Name;	
  		}
  	},

	Name: '',

  	getQueues: function(){
  		return this.get('Queues');
  	},

  	getName: function(){
  		return this.Name;
  	},
  	
  	getWorkItem: function(id){
  		var toReturn = null;
  		
  		var queues = this.models;
  		
  		//each queue
  		for(var i = 0, k = queues.length; i < k; i++){
  			var queue = queues[i];
  			
  			var items = queue.models;
  			
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
  		
  		//var queues = this.get('Queues');
  		var queues = this.models;
  		
  		//each queue
  		for(var i = 0, k = queues.length; i < k; i++){
  			var queue = queues[i];
  			var name = queue.getName();
  			if(name == id){
  				//toReturn = queues[i];
  				toReturn = this.at(i);
  				break;
  			}
  		}
  		
  		return toReturn;
  	}
});

Kanbano.Model.ValueStream = ValueStream;