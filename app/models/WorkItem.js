var WorkItem = Backbone.Model.extend({

  defaults: {
    "Location":  '',
    "Name":     ''
  },
  
  getLocation: function(){
  	return this.get('Location');
  },

  getName: function(){
  	return this.get('Name');
  },

  move: function(newLoc){
  	return this.set({Location : newLoc});
  }
});

Kanbano.Model.WorkItem = WorkItem;