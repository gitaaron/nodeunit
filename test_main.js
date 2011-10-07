require(['fs', 'path'], function(fs, path) {


    var files = [];
    var reporter_path = 'lib/reporters/';
    var reporter_module = reporter_path + 'default';
    var args = process.ARGV.slice(2);
    var content = fs.readFileSync(path.resolve()+'/bin/nodeunit.json');
    var options = JSON.parse(content);

    args.forEach(function(arg) {
        if(arg.slice(0,11)=='--reporter=') {
            reporter_module = reporter_path + arg.slice(11);
        } else if(arg.slice(0,9)=='--output=') {
            options.output = arg.slice(9);
        } else if(arg!='test_main.js') {
            files.push(arg);
        }

    });

    var testrunner = require(reporter_module);
    testrunner.run(files, options);

});
