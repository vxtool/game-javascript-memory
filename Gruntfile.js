module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'source/tasks/gruntjs'),
        data: {
        	projectDev : 'source/assets',
        	projectDir : 'public/dist',
            pkg: grunt.file.readJSON('package.json')
        }
    });

};