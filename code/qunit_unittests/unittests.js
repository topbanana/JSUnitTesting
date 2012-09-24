/// <reference path="library.js" />
module("TestableObject")

test("TestableObject Exists", function () {
	// arrange
	// act
	var type= typeof(TestableObject);
	// assert
	equals(type, "object", "TestableObject to be object");
});
