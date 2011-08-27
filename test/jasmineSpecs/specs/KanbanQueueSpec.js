/*aptana support*/
var _prevSpec=null;if(jasmine){_prevSpec=expect;}
var returnedExpect={};returnedExpect.toEqual=function(y){};returnedExpect.toBe=function(y){};returnedExpect.toMatch=function(pattern){};returnedExpect.toBeDefined=function(){};returnedExpect.toBeUndefined=function(){};returnedExpect.toBeNull=function(){};returnedExpect.toBeTruthy=function(){};returnedExpect.toBeFalsy=function(){};returnedExpect.toContain=function(y){};returnedExpect.toBeLessThan=function(y){};returnedExpect.toBeGreaterThan=function(y){};returnedExpect.toThrow=function(e){};var expect=function(){return returnedExpect;};if(jasmine){expect=_prevSpec;}
/*aptana support*/

describe('KanbanQueue', function () {
	var testItem = KanbanQueue({name:'Request',items: []});
	
	it('will initialize itself when instantiated with an object',function(){
		var locItem = KanbanQueue({name:'Request',items: []});
		expect(locItem.getName()).toEqual('Request');
		expect(locItem.getItems()).toEqual([]);
	});
	
	it('has a name',function(){
		expect(testItem.getName()).toEqual('Request');
	});
	
	it('has a list of items',function(){
		expect(testItem.getItems()).toEqual([]);
	});
	
	it('will accept work items',function(){
		
	});
});