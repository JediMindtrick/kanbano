/*
var KanbanQueue = function(passedObj){
	var constructor = function(obj){
		var toReturn = {};
		var _ItemAddedHandlers = [];
		var _name = obj.name || '';
		var _items = obj.items || [];
	
	
		toReturn.getName = function () {
			return _name;
		};
		
		toReturn.getItems = function(){
			return _items;
		};
		
		toReturn.acceptWork = function(item){
			_items.push(item);
			
			for(var i = 0, l = _ItemAddedHandlers.length; i < l; i++){
				_ItemAddedHandlers[i](toReturn, item);
			}
		};
		
		toReturn.subscribeItemAdded = function (handler){
			_ItemAddedHandlers.push(handler);
		};
		
		return toReturn;
	};
	
	return constructor(passedObj);
};
*/

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

	
  	acceptWork: function(item){
  		this.get('Items').push(item);
		
		var handlers = this.get('ItemAddedHandlers');
		
		for(var i = 0, l = handlers.length; i < l; i++){
			handlers[i](this, item);
		}
	},

	subscribeItemAdded: function (handler){
		this.get('ItemAddedHandlers').push(handler);
	}
});