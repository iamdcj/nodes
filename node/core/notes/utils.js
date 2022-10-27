const fs = require("fs");

const returnNotes = (file) => {
  const buffer = fs.readFileSync(file);

  return JSON.parse(buffer);
};

const updateNotes = (filepath, notes) => {
  return fs.writeFileSync(filepath, JSON.stringify(notes));
};

module.exports = { returnNotes, updateNotes };
