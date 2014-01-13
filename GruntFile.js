module.exports = function(grunt) {

 	grunt.initConfig({
 		jshint: {
 			src: 'microObservables.js',
 			options: {
 				globals: {
 					window: true
 				}
 			}
 		},
 		qunit : {
			all: ['test/**/*.html']
 		}
 	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'qunit']);

};