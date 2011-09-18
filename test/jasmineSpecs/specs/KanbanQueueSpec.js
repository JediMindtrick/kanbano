/*aptana support*/
var _prevSpec=null;if(jasmine){_prevSpec=expect;}
var returnedExpect={};returnedExpect.toEqual=function(y){};returnedExpect.toBe=function(y){};returnedExpect.toMatch=function(pattern){};returnedExpect.toBeDefined=function(){};returnedExpect.toBeUndefined=function(){};returnedExpect.toBeNull=function(){};returnedExpect.toBeTruthy=function(){};returnedExpect.toBeFalsy=function(){};returnedExpect.toContain=function(y){};returnedExpect.toBeLessThan=function(y){};returnedExpect.toBeGreaterThan=function(y){};returnedExpect.toThrow=function(e){};returnedExpect.toHaveBeenCalled=function(){};returnedExpect.toHaveBeenCalled=function(){};returnedExpect.toHaveBeenCalledWith=function(arguments){};returnedExpect.not=returnedExpect;var expect=function(){return returnedExpect;};if(jasmine){expect=_prevSpec;}
var _prevJasmine=null;if(jasmine){_prevJasmine=jasmine;}
var jasmine={};jasmine.createSpy=function(){};if(_prevJasmine){jasmine=_prevJasmine;}
/*aptana support*/

describe('KanbanQueue', function () {
	var testItem = new KanbanQueue([], {Name:'Request'});
	
	it('initializes itself when instantiated with an object',function(){
		var locItem = new KanbanQueue([],{Name: 'Request'});
		//var locItem = new KanbanQueue({Name:'Request',Items: []});
		//expect(locItem.get('Name')).toEqual('Request');
		//expect(locItem.models).toEqual([]);
		expect(locItem.length).toEqual(0);
		expect(locItem.getName()).toEqual('Request');
		//expect(locItem.getItems()).toEqual([]);
		
	});
	
	it('has a name',function(){
		var compare = testItem.getName();
		
		expect(testItem.getName()).toEqual('Request');
	});
	
	/*
	it('has a list of items',function(){
		expect(testItem.getItems()).toEqual([]);
	});
	*/
	
	it('accepts work items',function(){
		//var locItem = new KanbanQueue({Name:'Request',Items: []});
		var locItem = new KanbanQueue([], {Name:'Request'});
		var mockWork = new WorkItem({Name: "testWork"});
		locItem.acceptWork(mockWork);
		//expect(locItem.getItems().indexOf(mockWork)).not.toBe(-1);
		expect(locItem.models.indexOf(mockWork)).not.toBe(-1);
		
	});
	
	it('takes subscriptions to its "ItemAdded" event',function(){
		var locItem = new KanbanQueue([], {Name:'Request',Items: []});

		expect(function(){
			locItem.bind('ItemAdded',function(){});
		}).not.toThrow();
	});
	
	it('raises "ItemAdded" event containing itself and the new item when a work item is accepted',function(){
		var locItem = new KanbanQueue([], {Name:'Request',Items: []});
		var spyHandler = jasmine.createSpy();

		expect(function(){
			locItem.bind('ItemAdded',spyHandler);
		}).not.toThrow();
		
		var mockWork = new WorkItem({Name:'TestWork'});
		locItem.acceptWork(mockWork);
		
		expect(spyHandler).toHaveBeenCalled();
		expect(spyHandler).toHaveBeenCalledWith(locItem,mockWork);

		expect(locItem.length).toBe(1);		
		expect(locItem.at(0).get('Name')).toBe('TestWork');
		expect(locItem.models.indexOf(mockWork)).not.toBe(-1);
	});
	
	it('raises "ItemRemoved" event containing itself and the old item when a work item is removed',function(){
		var locItem = new KanbanQueue([], {Name:'Request',Items: []});
		var spyHandler = jasmine.createSpy();

		expect(function(){
			locItem.bind('ItemRemoved',spyHandler);
		}).not.toThrow();
		
		var mockWork = new WorkItem({Name:'TestWork'});
		locItem.acceptWork(mockWork);
		
		expect(locItem.models.length).toBe(1);	
		
		locItem.removeWork(mockWork.getName());
		
		expect(spyHandler).toHaveBeenCalledWith(locItem,mockWork.getName());

		expect(locItem.length).toBe(0);		
		expect(locItem.models.indexOf(mockWork)).toBe(-1);
	});
});