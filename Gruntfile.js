module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['app/js/*.js'],
          dest: 'app/js/min/scripts.min.js',
        },
    },
    compass: {
        dist: {
          options: {
            sassDir: 'app/css/sass/',
            cssDir: 'app/css/',
            environment: 'production'
          }
        }
    },
    protractor: {
      options: {
        configFile: "test/protractor-conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
                seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
                chromeDriver: 'node_modules/protractor/selenium/chromedriver'
        }
      },
      run: {}
    },
    jshint: {
      options: {
        undef: false,
        devel: true,
        node: true,
        globals: {
          jQuery: true,
          angular: true,
          $: true
        },
      },
      customjs: ['app/js/*.js']
    },
    watch: {
      sass: {
        files: ['app/css/sass/**/*.scss'],
        tasks: ['compass'],
      },
      livereload: {
        options: { livereload: true },
        files: ['app/css/main.css','app/js/*.js','app/partials/**/*','app/index.html']
      },
      e2e: {
        files: ['app/js/*.js','app/partials/**/*','app/index.html','test/e2e/*.js'],
        tasks: ['protractor']
      },
      jshint: {
        files: ['app/js/*.js'],
        tasks: ['jshint']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'sass', 'concat', 'jshint']);

};