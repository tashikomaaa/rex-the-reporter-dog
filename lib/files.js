const fs = require("fs-extra");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  writeFile: (filePath, data) => {
    const str = filePath.substring(0, filePath.lastIndexOf("/"))
    if(!fs.existsSync(str)) {
      fs.mkdirSync(str, {
        recursive: true
      })
      .then(fs.writeFileSync(str, data))
    }
  },

  deletFile: (filePath) => {
    return fs.unlink(filePath);
  },
};
