module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
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