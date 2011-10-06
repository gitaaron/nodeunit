define(['exports'], function(exports) {

    exports.testSomething = function(test) {
        text.expect(1);
        test.ok(true, "this assertion should pass");
        test.done();
    };

});
