Kanbano.Views.KanbanQueuesIndex = Backbone.View.extend({
    initialize: function(model) {
        this.documents = this.options.documents;
        this.render(model);
    },
        
    render: function(valueStream) {
    	$('#appContainer').html('');
    	var toAdd = ''; 
    	var self = this;
    	
    	if(valueStream != undefined){
    		//template rendering
    		$('#queueTemplate').tmpl(valueStream.getQueues())
	    		.appendTo('#appContainer');
			//handlers, wiring, etc. here
			$('button').button();
			$('.item button').click(function(){
				//get the item id
				var id = $(this).closest('.item').attr('id');
				
				//get the next queue location
				var next = null;
				var lastQueueId = $('.queue:last').attr('id');
				var currQueueId = $(this).closest('.queue').attr('id');
				if(currQueueId != lastQueueId){
					next = $(this).closest('.queue').next('.queue').attr('id');
				}
				else{
					next = 'WorkComplete';
				}
				
				//move to the next queue
				var item = valueStream.getWorkItem(id);
				item.move(next);
				
				//render
				self.render(valueStream);
			});
    	}
    }
});
