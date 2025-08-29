var Client = require('ftp');
var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);
require('dotenv').config()

var baseURL = `/public_html/`;
var url = `${baseURL}`
var readFilePath = ``;
var fileName = `index.php`;
var writeFilePath = ``;

// console.log(url)
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);

//? read the file just in case
// fs.readFile(`${readFilePath}${fileName}`, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:');
//   console.log(data)
// });

var c = new Client();
c.on('ready', function () {

  //? UPLOAD SINGLE FILE TO DIRECTORY

  c.put(`${readFilePath}${fileName}`, `${url}${fileName}`, (err) => {
    if (err) throw err;
    console.log(`successfully uploaded file: ${fileName}`);
    c.end();
  });


  //? MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES
  /*
    c.mkdir(url, true, (err) => {
      if (err) throw err;
      console.log(`successfully made dir: ${url}`);

      //upload file
      c.put(`${readFilePath}${fileName}`, `${url}${fileName}`, (err) => {
        if (err) throw err;
        console.log(`successfully uploaded file: ${fileName}`);
        c.end();
      });

    });
  */


  //? GET LIST OF FILES THEN COMPILE HTML FILES
  /*
    c.list(url, function(err, list) {
      if (err) throw err;
      list.map((val, i) => {
        console.log(val);
      c.end();
    });
  */


  //? GET LIST OF FILES THEN DELETE FILES IN DIRECTORY
  /*
  c.list(url, function(err, list) {
    if (err) throw err;
    list.map((val, i) => {
      if (val.type == '-') {
        // console.log(val);

        //DELETE FILES
        c.delete(`${url}${val.name}`, function(err) {
          if (err) throw err;
          console.log(`successfully deleted file: ${url}${val.name}`);
          c.end();
        });
      }
    })
    // console.dir(list);
    // c.end();
  });
  */


  //? LIST DIRECTORIES
  /*
    c.list(url, function(err, list) {
      if (err) throw err;
      list.map((val, i) => {
        // if (val.type == 'd') {
        console.log(val);
        // }
      })
      // console.dir(list);
      c.end();
    });
  */

});

//? CONNECT FTP
c.connect({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD
});