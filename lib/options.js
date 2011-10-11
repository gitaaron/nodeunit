define(['exports', 'path','module', 'fs'], function(exports, path, module, fs) {

    exports.load = function() {
        var content = fs.readFileSync(path.join(path.dirname(module.uri), '/../bin/nodeunit.json'));
        var options = JSON.parse(content);
        return options;
    }

});
