/*aptana support*/
var _prevSpec=null;if(jasmine){_prevSpec=expect;}
var returnedExpect={};returnedExpect.toEqual=function(y){};returnedExpect.toBe=function(y){};returnedExpect.toMatch=function(pattern){};returnedExpect.toBeDefined=function(){};returnedExpect.toBeUndefined=function(){};returnedExpect.toBeNull=function(){};returnedExpect.toBeTruthy=function(){};returnedExpect.toBeFalsy=function(){};returnedExpect.toContain=function(y){};returnedExpect.toBeLessThan=function(y){};returnedExpect.toBeGreaterThan=function(y){};returnedExpect.toThrow=function(e){};var expect=function(){return returnedExpect;};if(jasmine){expect=_prevSpec;}
/*aptana support*/

describe('WorkItem', function () {
	var testItem = WorkItem({name:'testitem',location:'request'});
	
	it('will initialize itself when instantiated with an object',function(){
		var qLocation = 'RequestQueue';
		var locItem = WorkItem({name: 'foo', location: qLocation});
		expect(locItem.getName()).toEqual('foo');
		expect(locItem.getLocation()).toEqual(qLocation);
	});
	
	it('has a name',function(){
		expect(testItem.getName()).toEqual('testitem');
	});
	
	it('has a location',function(){
		expect(testItem.getLocation()).toEqual('request');
	});
	
	it('changes its location when told to move()', function(){
		var locItem = WorkItem({location:'first'});
		locItem.move('second');
		expect(locItem.getLocation()).toEqual('second');
	});	
});