/**
 * @author brandon
 */
Kanbano.Views = Kanbano.Views || {};


Kanbano.Views.KanbanQueuesIndex = Backbone.View.extend({
    initialize: function(model) {
        this.documents = this.options.documents;
        this.render(model);
    },
    
    render: function(model) {
    	$('#appContainer').html('Yay, we called a view!');
    	
    	var toAdd = '<div id="TestQueue" class="kanbanqueue">'
				 	+ '<h3>Request</h3>';
				 	
		$.each(model[0].getItems(),function(index,item){
			toAdd += '<div id="' + item.getName() + '" class="workItem">' + item.getName();
		});

		toAdd	+= 			'</div>' +  
					'</div>';
    	
    	$('#appContainer').html(toAdd);
    }
});