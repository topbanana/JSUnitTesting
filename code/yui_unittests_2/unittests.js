			
YUI({ logInclude: { TestRunner: true } }).use('node', 'test', 'json', function (Y) {

	var suite = new Y.Test.Suite({
		name: "TestableObject Fixture",
		setUp: function () {
			//test-suite-level setup
		},
		tearDown: function () {
			//test-suite-level teardown
		}
	});

	suite.add(new Y.Test.Case({
		name: "TestableObject Exists",
		testTestableObjectExists: function () {
			// arrange
			// act
			// assert
			Y.Assert.isObject(TestableObject);
		}
	}));
	
	Y.Test.Runner.subscribe(Y.Test.Runner.TEST_SUITE_COMPLETE_EVENT, handleTestResults); 
	Y.Test.Runner.add(suite);
	Y.Test.Runner.run();
	 
	function handleTestResults(results) {
		document.getElementById("log").innerHTML= htmlify(Y.Test.Format.JUnitXML(results.results))
		prettyPrint();
	}

});
