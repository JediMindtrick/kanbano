/*aptana support*/
var _prevSpec=null;if(jasmine){_prevSpec=expect;}
var returnedExpect={};returnedExpect.toEqual=function(y){};returnedExpect.toBe=function(y){};returnedExpect.toMatch=function(pattern){};returnedExpect.toBeDefined=function(){};returnedExpect.toBeUndefined=function(){};returnedExpect.toBeNull=function(){};returnedExpect.toBeTruthy=function(){};returnedExpect.toBeFalsy=function(){};returnedExpect.toContain=function(y){};returnedExpect.toBeLessThan=function(y){};returnedExpect.toBeGreaterThan=function(y){};returnedExpect.toThrow=function(e){};returnedExpect.not=returnedExpect;var expect=function(){return returnedExpect;};if(jasmine){expect=_prevSpec;}
/*aptana support*/

describe('WorkItem', function () {
	var testItem = new WorkItem({Name:'testitem',Location:'request'});
	
	it('initializes itself when instantiated with an object',function(){
		var qLocation = 'RequestQueue';
		var locItem = new WorkItem({Name: 'foo', Location: qLocation});
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
		var streamSpy = {};
		
		var fromQueue = { removeWork: function(){} };
		spyOn(fromQueue,'removeWork').andReturn(true);
		
		var toQueue = { acceptWork: function(){} };
		spyOn(toQueue,'acceptWork').andReturn(true);
				
		var locItem = new WorkItem({Location:'first',ValueStream:streamSpy});
		streamSpy.getQueue = function(id){
			if(id == 'first'){
				return fromQueue;
			}
			else{
				return toQueue;
			}
		};
		
		//act
		locItem.move('second');
		
		//assert
		expect(locItem.getLocation()).toEqual('second');
		expect(toQueue.acceptWork).toHaveBeenCalled();
		expect(fromQueue.removeWork).toHaveBeenCalled();
	});	
});