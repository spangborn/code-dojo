//tests.js'
test( "Sample Test", function() {
  ok( 1 == 1, "Check for 1=1" );
});

test("jQuery Check", function () {
	ok(typeof jQuery === "function", "jQuery is a function");
});

test("Word Count", function () {
	// Append some test data to the page
	var $p = $("<p>", {
		"text"  : "Lorem ipsum dolor sit amet.",
		"class" : "test-1"
	}).appendTo("body");

	// Run the plugin
	$(".test-1").wordCount();
	var count = $(".test-1").data("words");

	// The actual tests
	ok(typeof count != undefined, "Count is defined");
	equal(5, count, "Test 5 words");

	// Tear down
	$(".test-1").remove();

});