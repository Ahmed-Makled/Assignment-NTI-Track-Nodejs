/**********************************************
 * Tasks
      1-folderName =>  folderPath
      2-wrap code within try catch
      3-if folder exists skip that process
      4-if folder not exists create that folde
 ***********************************************/
/**********************************************
 * Steps
      //1- get argv action
      //2- Switch action case (createFile , initProject)
      //3- creat file >> fileName , Content And Append to fs
      //4- initProject >> Try >>rootPath+(css,js,image,index)>>catch err
      //5- mkdireSync
      //6- writeFileSync
 ***********************************************/

// Import module file system
const fs = require("fs");
const data = require("./initProject");

// Defined Array to get argv for action
const [, , action] = process.argv;

// defiend process.argv in variable
const argv = process.argv;

// Switch Statment
switch (action) {
  case "createFile":
    const fileName = argv[3];
    const content = argv[4] ? argv[4] : "";
    fs.appendFileSync(fileName, content);
    break;
  case "initProject":
    const [, , , path] = process.argv;
    data.createDir(path);
    break;
  case "initRemove":
    data.rmDir();
    break;
  default:
    console.log("err");
}
