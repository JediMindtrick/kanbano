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
  	}
});

Kanbano.Model.ValueStream = ValueStream;