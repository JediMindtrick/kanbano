// Matchers should throw an error when they get an unexpected result.
var Assert =  YUITest.Assert;

ramble.match(/^I have a piece of work in a queue$/, function() {
  // code
  this.visit('/kanbano/app.html');
  var ms = 5000;
  ramble.retryOnFailWithinMilliseconds = ms;
  
  Assert.areEqual(1,this.find('#TestQueue #TestWork').length);
});

ramble.match(/^the location of the work is not in the last queue$/, function() {
  // code
});

ramble.match(/^I advance the work$/, function() {
  // code
});

ramble.match(/^the work will move into the next queue$/, function() {
  // code
});

ramble.match(/^the work will no longer exist in the old queue$/, function() {
  // code
});