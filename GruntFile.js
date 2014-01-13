module.exports = function(grunt) {

 	grunt.initConfig({
 		jshint: {
 			src: 'microObservables.js',
 			options: {
 				globals: {
 					window: true
 				}
 			}
 		}
 	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'qunit']);

};