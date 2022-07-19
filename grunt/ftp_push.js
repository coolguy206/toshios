require('dotenv').config()
// console.log(config.hp);
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);
// console.log(`homepage/${config.hp.ftp.css.src}`);

var baseURL = `media/tea_collection/`;

module.exports = {

  CSS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'css/output/',
      src: [
        "*.css",
      ]
    }]
  },

  JS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'js/jsmin/',
      src: [
        "scripts.min.js",
      ]
    }]
  },


};