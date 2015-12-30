module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      compress: {
        drop_console: false
      }
    },
    example: {
      files: {
        '<%= projectDir %>/script.min.js': 
        [
        '<%= projectDev %>/js/script.js'
        ]
      }
    }
  };
};