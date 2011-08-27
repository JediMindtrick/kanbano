var WorkItem = function(obj){
	var toReturn = {};
	
	/*Private*/
	var _location = obj.location || '';
	var _name = obj.name || '';
	
	toReturn.getName = function(){
		return _name;
	};
	
	toReturn.getLocation = function () {
		return _location;
	};
	
	toReturn.move = function(newLoc){
		_location = newLoc;
	};
	
	return toReturn;
};
