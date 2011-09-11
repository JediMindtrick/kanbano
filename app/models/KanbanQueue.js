var KanbanQueue = Backbone.Model.extend({

	defaults: {
    	"Items":  [],
		"Name":   ''
  	},

  	getItems: function(){
  		return this.get('Items');
  	},

  	getName: function(){
  		return this.get('Name');
  	},

	/*Whenever the queue gets new work items, we want to know about it.*/
  	acceptWork: function(item){
  		var toReturn = false;
  		
  		try{
  			this.get('Items').push(item);
  		
			this.trigger('ItemAdded',this,item);
			
			toReturn = true;
		}
		catch(ex){
			//for now, swallow the exception
		}
		
		return toReturn;
	},
	
	removeWork: function(id){
		var toReturn = false;
  		
  		try{
			var items = this.get('Items');
			//find the item by id and remove it...also raising an event
			for(var i = 0, k = items.length; i < k; i++){
				if(items[i].getName() == id){
					items.splice(i,1);
					this.trigger('ItemRemoved',this,id);
				}
			}
			
			toReturn = true;
		}
		catch(ex){
			//for now, swallow the exception
		}
		
		return toReturn;
	}
	
});

Kanbano.Model.KanbanQueue = KanbanQueue;