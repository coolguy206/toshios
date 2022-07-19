module.exports = {

  options: {
    livereload: true
  },


  watch: {
    files: ['css/*.less', '*.php', 'js/*.js'],
    tasks: ['less', 'babel', 'browserify', 'uglify', 'includes'],
  },


};