module.exports = {

  options: {
    compress: true,
    // sourceMap: true
  },

  hp: {
    //dynamic files
    expand: true,
    cwd: 'js/',
    src: ['*.js'],
    dest: 'js/jsmin/',
    ext: '.min.js',
  },



};