'use strict';
module.exports = function (grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        release: {
            options: {}
        }
    });

    grunt.registerTask('default', ['']);
};
