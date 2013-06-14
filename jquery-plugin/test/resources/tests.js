//tests.js
test( "Sample Test", function() {
  ok( 1 == 1, "Check for 1=1" );
});

test("jQuery Check", function () {
	ok(typeof jQuery === "function", "jQuery is a function");
});

test("Word Count", function (){
	// Setup
	var $body = $("body");
	var $text = $("<p>", {
		"class" : "test-1",
		"text"	: "Lorem ipsum, dolor sit amet."
	}).appendTo($body);

	// Test
	$text.wordCount();
	var words = $($text).data("count");
	equal( words, 5, "Count 5 words" );

	// Teardown
	$text.remove();


	// Setup
	var $text = $("<p>", {
		"class" : "test-2",
		"text"	: "Lorem ipsum, dolor sit amet Mike."
	}).appendTo($body);

	// Test
	$text.wordCount();
	var words = $text.data("count");
	equal( words, 6, "Count 6 words" );

	// Teardown
	$text.remove();
});

test("Target Argument", function(){
	var $body = $("body");
	var $text = $("<p>", {
		"class" : "test-3",
		"text"	: "Lorem ipsum, dolor sit amet."
	}).appendTo($body);

	$text.wordCount({
		"targetAttr" : "mike"
	});

	var mike = $text.data("mike");
	equal(mike, 5, "Different target attribute");

	$text.remove();
});

test("Result DIV", function() {

	var $body = $("body");
	var $text = $("<p>", {
		"class" : "test-4",
		"text"	: "Lorem ipsum, dolor sit amet."
	}).appendTo($body);

	var $result = $("<div>", {
		"class" : "result"
	}).appendTo($body);

	$text.wordCount({
		"result" : ".result"
	});

	var countText = $text.next(".result").text();

	equal(countText, "5 word(s)", "Test result DIV");

	$text.remove();
	$result.remove();
});
