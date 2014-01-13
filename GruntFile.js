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
 		}, 
 		uglify : {
 			options: {
 				report: 'gzip'
 			},
 			min: {
	 			files: {
	 				'microObservables.min.js' : 'microObservables.js'
	 			}
	 		}
 		} 
 	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('min', ['uglify']);
	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['test', 'min']);

};