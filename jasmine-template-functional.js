exports.process = function(grunt, task, context) {
	var util = require('util');
	// task.copyTempFile(__dirname + '/node_modules/jasmine-jquery/lib/jasmine-jquery.js', 'jasmine-jquery.js');
	task.copyTempFile(__dirname + '/node_modules/jasmine-reporters/src/jasmine.console_reporter.js', 'console_reporter.js');
	return grunt.file.read(context.options.index);
};