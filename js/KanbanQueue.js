var KanbanQueue = function(passedObj){
	var constructor = function(obj){
		var toReturn = {};
	
		var _name = obj.name || '';
		var _items = obj.items || [];
	
	
		toReturn.getName = function () {
			return _name;
		};
		
		toReturn.getItems = function(){
			return _items;
		};
		
		return toReturn;
	};
	
	return constructor(passedObj);
};
