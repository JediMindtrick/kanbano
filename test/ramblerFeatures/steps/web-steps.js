// Matchers should throw an error when they get an unexpected result.
var Assert =  YUITest.Assert;

ramble.match(/^I have a piece of work in a queue$/, function() {
  // code
  this.visit('/kanbano/Default.html');
  Assert.areEqual(1,$('#requestQueue #testWork').length);
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

/*
ramble.match(/^I follow "(.+)"$/, function(linkText) {
  this.clickLink(linkText);
});

ramble.match(/^I press "(.+)"$/, function(buttonText) {
  this.clickButton(buttonText);
});

ramble.match(/^I fill in "(.+)" with "(.+)"$/, function(labelText, value) {
  this.fillIn(labelText, value);
});

ramble.match(/^I should see "(.+)"$/, function(string) {
  this.assertHasContent(string);
});

ramble.match(/^I am on (.+)$/, function(pathName) {
  this.visit(ramble.pathTo(pathName));
});

ramble.match(/^I should be on (.+)$/, function(pageName) {
  this.assertCurrentPath(ramble.pathTo(pageName));
});

ramble.match(/^I make the heading "(.+)"$/, function(color) {
  this.find('h1').css('color', color);
});

ramble.match(/^I should eventually see "(.+)"$/, function(string) {
  var ms = 5000;
  ramble.retryOnFailWithinMilliseconds = ms;
  this.assertHasContent(string);
});
*/