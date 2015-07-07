module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: false,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-bump');
};
