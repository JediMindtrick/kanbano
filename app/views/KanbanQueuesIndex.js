Kanbano.Views.KanbanQueuesIndex = Backbone.View.extend({
    initialize: function(model) {
        this.documents = this.options.documents;
        this.render(model);
    },
    
    render: function(model) {
    	var toAdd = ''; 
    	
    	if(model != undefined){
	    	toAdd = '<div id="TestQueue" class="kanbanqueue">'
					 	+ '<h3>Request</h3>';
					 	
			$.each(model[0].getItems(),function(index,item){
				toAdd += '<div id="' + item.getName() + '" class="workItem">' + item.getName();
			});
	
			toAdd	+= 			'</div>' +  
						'</div>';
	
			toAdd += '<a href="#addItem/request/5">Add Item</a>';
		}    	
		else{
			toAdd = 'KanbanQueuesIndex view' + '<br />' + '<a href="#addItem/request/5">Add Item</a>';
		}
		
    	$('#appContainer').html(toAdd);
    }
});
