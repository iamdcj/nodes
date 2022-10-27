const fs = require("fs");

const readWriteData = (file, data = {}) => {
  const buffer = fs.readFileSync(file);
  const parsedData = JSON.parse(buffer);
  
  const modifiedData = {
    ...parsedData,
    ...data,
  };

  return fs.writeFileSync(file, JSON.stringify(modifiedData));
};

readWriteData('./data/index.json', {name: "Tosser"})

module.exports = { readWriteData };
