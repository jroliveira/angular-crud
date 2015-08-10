#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig
    copy:
      angularjs:
        files: [{
          expand: true
          cwd: "bower_components/angular-material/"
          src: "angular-material.css"
          dest: "vendor/css/"
        }, {
          expand: true
          cwd: "bower_components/angular/"
          src: "angular.js"
          dest: "vendor/js/"
        },{
          expand: true
          cwd: "bower_components/angular-route/"
          src: "angular-route.js"
          dest: "vendor/js/"
        }, {
          expand: true
          cwd: "bower_components/angular-resource/"
          src: "angular-resource.js"
          dest: "vendor/js/"
        }, {
          expand: true
          cwd: "bower_components/angular-messages/"
          src: "angular-messages.js"
          dest: "vendor/js/"
        }, {
          expand: true
          cwd: "bower_components/angular-animate/"
          src: "angular-animate.js"
          dest: "vendor/js/"
        }, {
          expand: true
          cwd: "bower_components/angular-aria/"
          src: "angular-aria.js"
          dest: "vendor/js/"
        }, {
          expand: true
          cwd: "bower_components/angular-material/"
          src: "angular-material.js"
          dest: "vendor/js/"
        }]
        
    exec:
      jekyll:
        cmd: "jekyll build --trace"

    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "css/**/*"
          "app/**/*"
          "partials/**/*"
          "_config.yml"
          "*.html"
          "*.md"
        ]
        tasks: [
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]