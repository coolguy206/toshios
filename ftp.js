var Client = require('ftp');
var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);
require('dotenv').config()

var baseURL = `/public_html/`;
var url = `${baseURL}`
var readFilePath = ``;
var writeFilePath = ``;

// console.log(url)
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);

var c = new Client();
c.on('ready', function() {
  /*
    //UPLOAD FILE TO DIRECTORY
    fs.readdir(`${readFilePath}`, (err, files) => {
      if (err) throw err;
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        // console.log(`${readFilePath}${file}`);
        // console.log(`${url}${file}`)

        //upload the file
        c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
          if (err) throw err;
          console.log(`successfully uploaded file: ${file}`);

        });

      });
    })
  */
  //MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES
  /*
    c.mkdir(url, true, (err) => {
      if (err) throw err;
      console.log(`successfully made dir: ${url}`);
      //read the files on local machine
      fs.readdir(`${readFilePath}`, (err, files) => {
        if (err) throw err;
        // console.log("\nCurrent directory filenames:");
        files.forEach(file => {
          // console.log(`${readFilePath}${file}`);
          // console.log(`${url}${file}`)

          //upload the file
          c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
            if (err) throw err;
            console.log(`successfully uploaded file: ${file}`);
            c.end();
          });

        });
      })
      // c.end();
    });
  */

  //GET LIST OF FILES THEN COMPILE HTML FILES
  /*
    c.list(url, function(err, list) {
      if (err) throw err;
      list.map((val, i) => {
        console.log(val);
      c.end();
    });
  */

  //GET LIST OF FILES THEN DELETE FILES IN DIRECTORY
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

  //LIST DIRECTORIES

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

});
//CONNECT FTP
c.connect({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD
});