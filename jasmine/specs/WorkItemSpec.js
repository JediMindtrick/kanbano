describe('WorkItem', function () {
	var testingItem = WorkItem('TestItem');
	
	it('has a name', function(){
		expect(testingItem.Name).toBeDefined();
	});
});