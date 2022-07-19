module.exports = {

  options: {
    // sourceMap: true,
    compress: true,
  },


  css: {
    expand: true,
    cwd: 'css/',
    src: '*.less',
    dest: 'css/ouput/',
    ext: '.css',
  },


};