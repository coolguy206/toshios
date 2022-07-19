module.exports = {

  options: {
    compress: true,
    // sourceMap: true
  },

  hp: {
    //dynamic files
    expand: true,
    cwd: 'js/browserify',
    src: ['*.js'],
    dest: 'js/jsmin/',
    ext: '.min.js',
  },



};