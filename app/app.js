Kanbano = {
    Views: {},
    Controllers: {},
    Model: {
    	ValueStreams: {}
    },
    Resources: {},
    init: function() {
    	Backbone.history || (Backbone.history = new Backbone.History);
		var started = Backbone.history.start({pushState: false, root: "/kanbano/"});
		
		Kanbano.Model.ValueStreams['DefaultValueStream'] = null;
	  	/*Load a value stream into the model*/
	  	  	
		//value stream
		var defaultStream = new Kanbano.Model.ValueStream(null,{Name:'DefaultValueStream'});
	
	  	//declare default queues
	  	var requestQ = new Kanbano.Model.KanbanQueue([],{Name:'Request'});
		var acceptanceDevQ = new Kanbano.Model.KanbanQueue([],{Name:'Acceptance Dev'});
		var implementationQ = new Kanbano.Model.KanbanQueue([],{Name:'Implementation'});
		var acceptanceTestQ = new Kanbano.Model.KanbanQueue([],{Name:'Acceptance Test'});
		var limitedReleaseQ = new Kanbano.Model.KanbanQueue([],{Name:'Limited Release'});
		
		//add queues to the value stream			
		defaultStream.add(requestQ);
		defaultStream.add(acceptanceDevQ);
		defaultStream.add(implementationQ);
		defaultStream.add(acceptanceTestQ);
		defaultStream.add(limitedReleaseQ);
		
		//add value stream into the model
		Kanbano.Model.ValueStreams['DefaultValueStream'] = defaultStream;
		
		(new Kanbano.Views.KanbanQueuesIndex(defaultStream));
		
    }
};