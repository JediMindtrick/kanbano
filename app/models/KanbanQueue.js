var KanbanQueue = Backbone.Model.extend({

	defaults: {
    	"Items":  [],
		"Name":   '',
		"ItemAddedHandlers": []
  	},

  	getItems: function(){
  		return this.get('Items');
  	},

  	getName: function(){
  		return this.get('Name');
  	},

	/*Whenever the queue gets new work items, we want to know about it.*/
  	acceptWork: function(item){
  		this.get('Items').push(item);
  		
		this.trigger('ItemAdded',this,item);
	}
});

Kanbano.Model.KanbanQueue = KanbanQueue;