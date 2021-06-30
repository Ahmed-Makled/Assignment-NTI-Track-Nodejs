const fs = require("fs");

let contentHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>This Projcet File Built By Script Nodejs using proccess.argv and fs</h1>
    <script src="js/app.js"></script>
</body>
</html>`;

function createDir(dir) {
  try {
    console.log(`${typeof dir} = ${dir}`);
    // convert string to object and remove /
    const dirPath = dir.split("/");
    dirPath.forEach((element, index) => {
      // slice object as array and convert it to string with " /" beetwen index
      const rootPath = dirPath.slice(0, index + 1).join("/");
      // check Path found or not
      if (!fs.existsSync(rootPath)) {
        const styleDir = `${rootPath}/css`; //Creat Folder css
        const styleFile = `${styleDir}/style.css`; // Creat file Style.css
        const jsDir = `${rootPath}/js`; // Creat Folder js
        const jsFIle = `${jsDir}/app.js`; // Creat file app.css
        const imgDir = `${rootPath}/images`; // Creat folder images
        const indexFile = `${rootPath}/index.html`; // creat file index.html
        const indexContent = contentHTML; // add default conntent to index. html

        fs.mkdirSync(rootPath); // Creat rootPath Folders
        fs.mkdirSync(styleDir); // Creat style Folder
        fs.mkdirSync(jsDir); // Creat javaScript Folder
        fs.mkdirSync(imgDir); // Creat images Folders
        //file system write on files
        fs.writeFileSync(styleFile, "");
        fs.writeFileSync(jsFIle, "");
        fs.writeFileSync(indexFile, indexContent);

        console.log("Folders Created");
      } else {
        console.log("Floders Exists");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createDir: createDir,
};
