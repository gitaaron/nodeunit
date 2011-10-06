require([], function() {
    var testrunner = require('lib/reporters/default');
    testrunner.run(['test/example.js']);
});
