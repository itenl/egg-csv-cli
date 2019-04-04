/**
 * Created by itenl.com on 2019/04/02.
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const generateCreate = (dirPath, sourcefile, name) => {
  const filePath = path.resolve(dirPath, name);
  const crt_dirPath = `./`;
  const crt_filePath = path.resolve(crt_dirPath, name);
  fs.pathExists(dirPath, (err, dirPath_exists) => {
    if (dirPath_exists) {
      fs.pathExists(filePath, (err, pathExists) => {
        if (pathExists) {
          console.log(`this file has created in ${filePath}`);
        } else {
          fs.copy(sourcefile, filePath, err => {
            if (err) {
              return console.error(err);
            }
            console.log(filePath + ' has created');
          });
        }
      });
    } else {
      fs.pathExists(crt_filePath, (err, pathExists) => {
        if (pathExists) {
          console.log(`this file has created in ${crt_filePath}`);
        } else {
          fs.copy(sourcefile, crt_filePath, err => {
            if (err) {
              return console.error(err);
            }
            console.log(crt_filePath + ' has created');
          });
        }
      });
    }
  });
};

exports.invoke = (type, name) => {
  let dirPath = '',
    sourcefile = '';
  switch (type) {
    case 'c':
      dirPath = `./app/controller/`;
      sourcefile = path.resolve(__dirname, '../template/controller/index.js');
      generateCreate(dirPath, sourcefile, `${name}.js`);
      break;
    case 's':
      dirPath = `./app/service/`;
      sourcefile = path.resolve(__dirname, '../template/service/index.js');
      generateCreate(dirPath, sourcefile, `${name}.js`);
      break;
    case 'v':
      dirPath = `./app/view/`;
      sourcefile = path.resolve(__dirname, '../template/view/index.html');
      generateCreate(dirPath, sourcefile, `${name}.html`);
      break;
    default:
      console.log(chalk.red(`ERROR: uncaught type , you should input like $ egg-csv g c list`));
      console.log();
      console.log(chalk.red(`CUSTOM TEMPLATE: ${path.resolve(__dirname, '../template')}`));
      console.log();
      console.log('  Examples:');
      console.log();
      console.log(chalk.gray('    # create a new controller'));
      console.log('    $ egg-csv g c list');
      console.log('    $ egg-csv g c activity/list');
      console.log();
      console.log(chalk.gray('    # create a new service'));
      console.log('    $ egg-csv g s list');
      console.log('    $ egg-csv g s activity/list');
      console.log();
      console.log(chalk.gray('    # create a new view'));
      console.log('    $ egg-csv g v list');
      console.log('    $ egg-csv g v activity/list');
      console.log();
      console.log(chalk.gray('    # https://github.com/itenl/egg-csv-cli/issues'));
      console.log();
      break;
  }
};

exports.extend = (type, name) => {
  console.log(type, name);
};
