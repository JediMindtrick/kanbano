/*aptana support*/
var _prevSpec=null;if(jasmine){_prevSpec=expect;}
var returnedExpect={};returnedExpect.toEqual=function(y){};returnedExpect.toBe=function(y){};returnedExpect.toMatch=function(pattern){};returnedExpect.toBeDefined=function(){};returnedExpect.toBeUndefined=function(){};returnedExpect.toBeNull=function(){};returnedExpect.toBeTruthy=function(){};returnedExpect.toBeFalsy=function(){};returnedExpect.toContain=function(y){};returnedExpect.toBeLessThan=function(y){};returnedExpect.toBeGreaterThan=function(y){};returnedExpect.toThrow=function(e){};returnedExpect.toHaveBeenCalled=function(){};returnedExpect.toHaveBeenCalled=function(){};returnedExpect.toHaveBeenCalledWith=function(arguments){};returnedExpect.not=returnedExpect;var expect=function(){return returnedExpect;};if(jasmine){expect=_prevSpec;}
var _prevJasmine=null;if(jasmine){_prevJasmine=jasmine;}
var jasmine={};jasmine.createSpy=function(){};if(_prevJasmine){jasmine=_prevJasmine;}
/*aptana support*/

describe('ValueStream',function(){
	var testStream = new ValueStream(null, {Name:'TestValueStream'});
	
	it('initializes itself when instantiated with an object',function(){
		var locItem = new ValueStream(null, {Name:'LocStream'});
		expect(locItem.getName()).toEqual('LocStream');
	});
	
	it('has a name',function(){
		var compare = testStream.getName();
		
		expect(testStream.getName()).toEqual('TestValueStream');
	});
	
	it("returns a work item when given it's id",function(){
		var locStream = new ValueStream(null, {Name:'LocStream'});
		
		//arrange
		var testWork = new Kanbano.Model.WorkItem({Name:"TestWork",Location:"TestRequestQueue"});
		var testQueue = new Kanbano.Model.KanbanQueue(null, {Name:'TestRequestQueue'});
		testQueue.acceptWork(testWork);
		
		locStream.add(testQueue);
		
		var returned = locStream.getWorkItem('TestWork');
		
		expect(returned).toBe(testWork);
	});
	
	it("returns a queue when given it's id",function(){
		//arrange
		var testQueue = new Kanbano.Model.KanbanQueue([], {Name:'TestQueue2'});
		
		testStream.add(testQueue);
		
		var returned = testStream.getQueue('TestQueue2');
		
		expect(returned).toBe(testQueue);
	});
});
