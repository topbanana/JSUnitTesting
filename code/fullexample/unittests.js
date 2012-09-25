var mockControl = new MockControl();
function iDocument() {};
iDocument.prototype= {
	getElementById: function() {}
};
function iXSLTProcessor() {};
iXSLTProcessor.prototype= {
	importStylesheet : function() {},
	transformToFragment: function() {}
}
var _document= mockControl.createMock(iDocument);
var _XSLTProcessor= mockControl.createMock(iXSLTProcessor);

testPageXmlIndenter= new PageXmlIndenter(_document, _XSLTProcessor);

test("testPageXmlIndenter never returns object", function() {
	ok(testPageXmlIndenter, "testPageXmlIndenter exists");
	ok(testPageXmlIndenter.transform, "testPageXmlIndenter.transform exists");
	ok(QUnit.is("function", testPageXmlIndenter.transform), "testPageXmlIndenter.transform is function ok");

	_document.expect().getElementById().andReturn(null);
	ok(QUnit.is("undefined", testPageXmlIndenter.transform()), "testPageXmlIndenter.transform() is undefined");

	_document.expect().getElementById().andReturn(null);
	ok(QUnit.is("undefined", testPageXmlIndenter.transform("onearg")), "testPageXmlIndenter.transform(nonexistanthtmlelement) is undefined");

	_document.expect().getElementById().andReturn(null);
	ok(QUnit.is("undefined", testPageXmlIndenter.transform(null)), "testPageXmlIndenter.transform(null) is undefined");

	_document.expect().getElementById().andReturn(null);
	ok(QUnit.is("undefined", testPageXmlIndenter.transform(null, "onearg")), "testPageXmlIndenter.transform(null,nonexistanthtmlelement) is undefined");

	_document.expect().getElementById().andReturn(null);
	ok(QUnit.is("undefined", testPageXmlIndenter.transform("onearg", "twoarg")), "testPageXmlIndenter.transform(nonexistanthtmlelement1, nonexistanthtmlelement2) is undefined");

	_document.expect().getElementById().andReturn({id: "input", value: "<test />"});
	_document.expect().getElementById().andReturn(null);
	_XSLTProcessor.expect().transformToFragment().andReturn(new DOMParser().parseFromString("<test />", "text/xml"));
	ok(QUnit.is("undefined", testPageXmlIndenter.transform("onearg", "twoarg")), "testPageXmlIndenter.transform(realelement, realelement) is undefined");

	_document.expect().getElementById().andReturn({id: "input", value: "<test />"});
	_document.expect().getElementById().andReturn({id: "output"});
	ok(QUnit.is("undefined", testPageXmlIndenter.transform("onearg", "twoarg")), "testPageXmlIndenter.transform(realelement, realelement) is undefined");
});

test("testPageXmlIndenter transforms xml", function() {
	// arrange
	_document.expect().getElementById().andReturn({id: "input", value: "<test />"});
	var outputHtmlElement= {id: "output"};
	_document.expect().getElementById().andReturn(outputHtmlElement);
	_XSLTProcessor.expect().transformToFragment().andReturn(new DOMParser().parseFromString("<test />", "text/xml"));
	// act
	testPageXmlIndenter.transform("onearg", "twoarg")
	// assert
	ok(QUnit.is("string", outputHtmlElement.innerHTML), "testPageXmlIndenter.transform places string into innerHtml");
	ok((outputHtmlElement.innerHTML == "&lt;test /&gt;") || (outputHtmlElement.innerHTML == "&lt;test/&gt;"), "testPageXmlIndenter outputs correct markup, was " + outputHtmlElement.innerHTML)
});