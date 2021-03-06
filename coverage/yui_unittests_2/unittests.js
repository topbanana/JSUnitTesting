/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['yui_unittests_2/unittests.js']) {
  _$jscoverage['yui_unittests_2/unittests.js'] = [];
  _$jscoverage['yui_unittests_2/unittests.js'][2] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][4] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][14] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][20] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][24] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][25] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][26] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][28] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][29] = 0;
  _$jscoverage['yui_unittests_2/unittests.js'][30] = 0;
}
_$jscoverage['yui_unittests_2/unittests.js'].source = ["\t\t\t","YUI<span class=\"k\">(</span><span class=\"k\">{</span> logInclude<span class=\"k\">:</span> <span class=\"k\">{</span> TestRunner<span class=\"k\">:</span> <span class=\"k\">true</span> <span class=\"k\">}</span> <span class=\"k\">}</span><span class=\"k\">).</span>use<span class=\"k\">(</span><span class=\"s\">'node'</span><span class=\"k\">,</span> <span class=\"s\">'test'</span><span class=\"k\">,</span> <span class=\"s\">'json'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">(</span>Y<span class=\"k\">)</span> <span class=\"k\">{</span>","","\t<span class=\"k\">var</span> suite <span class=\"k\">=</span> <span class=\"k\">new</span> Y<span class=\"k\">.</span>Test<span class=\"k\">.</span>Suite<span class=\"k\">(</span><span class=\"k\">{</span>","\t\tname<span class=\"k\">:</span> <span class=\"s\">\"TestableObject Fixture\"</span><span class=\"k\">,</span>","\t\tsetUp<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"c\">//test-suite-level setup</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\ttearDown<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"c\">//test-suite-level teardown</span>","\t\t<span class=\"k\">}</span>","\t<span class=\"k\">}</span><span class=\"k\">);</span>","","\tsuite<span class=\"k\">.</span>add<span class=\"k\">(</span><span class=\"k\">new</span> Y<span class=\"k\">.</span>Test<span class=\"k\">.</span>Case<span class=\"k\">(</span><span class=\"k\">{</span>","\t\tname<span class=\"k\">:</span> <span class=\"s\">\"TestableObject Exists\"</span><span class=\"k\">,</span>","\t\ttestTestableObjectExists<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"c\">// arrange</span>","\t\t\t<span class=\"c\">// act</span>","\t\t\t<span class=\"c\">// assert</span>","\t\t\tY<span class=\"k\">.</span>Assert<span class=\"k\">.</span>isObject<span class=\"k\">(</span>TestableObject<span class=\"k\">);</span>","\t\t<span class=\"k\">}</span>","\t<span class=\"k\">}</span><span class=\"k\">));</span>","\t","\tY<span class=\"k\">.</span>Test<span class=\"k\">.</span>Runner<span class=\"k\">.</span>subscribe<span class=\"k\">(</span>Y<span class=\"k\">.</span>Test<span class=\"k\">.</span>Runner<span class=\"k\">.</span>TEST_SUITE_COMPLETE_EVENT<span class=\"k\">,</span> handleTestResults<span class=\"k\">);</span> ","\tY<span class=\"k\">.</span>Test<span class=\"k\">.</span>Runner<span class=\"k\">.</span>add<span class=\"k\">(</span>suite<span class=\"k\">);</span>","\tY<span class=\"k\">.</span>Test<span class=\"k\">.</span>Runner<span class=\"k\">.</span>run<span class=\"k\">();</span>","\t ","\t<span class=\"k\">function</span> handleTestResults<span class=\"k\">(</span>results<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\tdocument<span class=\"k\">.</span>getElementById<span class=\"k\">(</span><span class=\"s\">\"log\"</span><span class=\"k\">).</span>innerHTML<span class=\"k\">=</span> htmlify<span class=\"k\">(</span>Y<span class=\"k\">.</span>Test<span class=\"k\">.</span>Format<span class=\"k\">.</span>JUnitXML<span class=\"k\">(</span>results<span class=\"k\">.</span>results<span class=\"k\">))</span>","\t\tprettyPrint<span class=\"k\">();</span>","\t<span class=\"k\">}</span>","","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['yui_unittests_2/unittests.js'][2]++;
YUI({logInclude: {TestRunner: true}}).use("node", "test", "json", (function (Y) {
  _$jscoverage['yui_unittests_2/unittests.js'][4]++;
  var suite = new (Y.Test.Suite)({name: "TestableObject Fixture", setUp: (function () {
}), tearDown: (function () {
})});
  _$jscoverage['yui_unittests_2/unittests.js'][14]++;
  suite.add(new (Y.Test.Case)({name: "TestableObject Exists", testTestableObjectExists: (function () {
  _$jscoverage['yui_unittests_2/unittests.js'][20]++;
  Y.Assert.isObject(TestableObject);
})}));
  _$jscoverage['yui_unittests_2/unittests.js'][24]++;
  Y.Test.Runner.subscribe(Y.Test.Runner.TEST_SUITE_COMPLETE_EVENT, handleTestResults);
  _$jscoverage['yui_unittests_2/unittests.js'][25]++;
  Y.Test.Runner.add(suite);
  _$jscoverage['yui_unittests_2/unittests.js'][26]++;
  Y.Test.Runner.run();
  _$jscoverage['yui_unittests_2/unittests.js'][28]++;
  function handleTestResults(results) {
    _$jscoverage['yui_unittests_2/unittests.js'][29]++;
    document.getElementById("log").innerHTML = htmlify(Y.Test.Format.JUnitXML(results.results));
    _$jscoverage['yui_unittests_2/unittests.js'][30]++;
    prettyPrint();
}
}));
