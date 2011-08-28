Kanbano.Views.KanbanQueuesIndex = Backbone.View.extend({
    initialize: function(model) {
        this.documents = this.options.documents;
        this.render(model);
    },
    
    render: function(valueStream) {
    	$('#appContainer').html('');
    	var toAdd = ''; 
    	
    	if(valueStream != undefined){
    		var queueCount = valueStream.getQueues().length;
    		
    		$.each(valueStream.getQueues(),function(index,queue){
    			
    			/*Each kanban queue*/
    			toAdd += '<div id="' + queue.getName() + '" class="kanbanqueue">'
					 	+ '<h3>Request</h3>';
			
				var itemCount = queue.getItems().length;		 	
				$.each(queue.getItems(),function(index,item){
					toAdd += '<div id="' + item.getName() + '" class="workItem">' + item.getName();
				});
		
				toAdd	+= 			'</div>' +  
							'</div>';
							
    		});
    		
			toAdd += '<a href="#addItem/request/5">Add Item</a>';
		}    	
		else{
			toAdd = 'KanbanQueuesIndex view' + '<br />' + '<a href="#addItem/request/5">Add Item</a>';
		}
		
    	$('#appContainer').html(toAdd);
    }
});
