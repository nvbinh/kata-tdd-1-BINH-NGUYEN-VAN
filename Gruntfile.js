'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    test: 'test'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      test: {
        files: ['<%= config.test %>/spec/test.js', '<%= config.app %>/calculator.js'],
        tasks: ['browserSync:test', 'jshint']
      }
    },

    browserSync: {
      options: {
        notify: true,
        background: true
      },
      livereload: {
        options: {
          files: [
        	'<%= config.test %>/{,*/}*.html',
        	'<%= config.app %>/{,*/}*.js',
        	'<%= config.test %>/spec/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: [config.test, config.app],
            routes: {
              '': ''
            }
          }
        }
      },
      test: {
        options: {
          port: 9001,
          open: false,
          logLevel: 'silent',
          host: 'localhost',
          server: {
            baseDir: [config.test],
            routes: {
              '': ''
            }
          }
        }
      }
    },

    jshint: {
		files: ['app/**/*.js', 'test/**/test.js'],
		options: {
			jshintrc: '.jshintrc'
		}
	},

    // Mocha testing framework configuration options
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= browserSync.test.options.host %>:<%= browserSync.test.options.port %>/index.html']
        }
      }
    }

  });

  grunt.registerTask('serve', 'start the server and preview your app', function () {
    grunt.task.run([
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', function () {
    grunt.task.run([
      'browserSync:test',
      'mocha'
    ]);
  });

  grunt.registerTask('default', [
    'serve'
  ]);
};
