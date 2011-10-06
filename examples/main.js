/*
 * Main program to show how simple might be used.
 * Usage :~/path_to_nodeunit$node r.js example/main.js
 */

require(['simple'], function(simple) {
    var s = new simple.Simple();
    console.log('calling foo returns : ' + s.foo());
});
