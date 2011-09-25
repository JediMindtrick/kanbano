//var KanbanQueue = Backbone.Model.extend({
var KanbanQueue = Backbone.Collection.extend({
	model: WorkItem,
  	localStorage: new Store("Queues"),
  	
  	initialize: function(coll,options){
  		if(options != undefined && options.Name != undefined){
  			this.Name = options.Name;	
  		}
  	},
  	
	Name : '',
	
  	getName: function(){
  		return this.Name;
  	},
  	
  	getItems: function(){
  		return this.models;
  	},

	/*Whenever the queue gets new work items, we want to know about it.*/
  	acceptWork: function(item){
  		var toReturn = false;
  		
  		try{
  			this.add(item);
  		
			this.trigger('ItemAdded',this,item);
			
			toReturn = true;
		}
		catch(ex){
			//for now, swallow the exception
			throw ex;
		}
		
		return toReturn;
	},
	
	removeWork: function(id){
		var toReturn = false;
  		
  		try{
			var items = this.models;
			//find the item by id and remove it...also raising an event
			for(var i = 0, k = items.length; i < k; i++){
				var name = items[i].getName();
				if(items[i].getName() == id){
					//items.splice(i,1);
					var item = items[i];
					this.remove(item);
					this.trigger('ItemRemoved',this,id);
				}
			}
			
			toReturn = true;
		}
		catch(ex){
			//for now, swallow the exception
			throw ex;
		}
		
		return toReturn;
	}
	
});

Kanbano.Model.KanbanQueue = KanbanQueue;