load("lib/qunit/qunit.js");

QUnit.init();
QUnit.config.blocking = false;
QUnit.config.autorun = true;
QUnit.config.updateRate = 0;
QUnit.log = function(result, message) {
    print(result ? 'PASS' : 'FAIL', message);
};

load("code/qunit_unittests_3/library.js");
load("code/qunit_unittests_3/unittests.js");
