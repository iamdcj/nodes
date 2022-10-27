const fs = require("fs");

const createNote = (name, initialData) => {
  return fs.writeFileSync(`${name}.txt`, initialData);
};

const getNote = (name) => {
  const file = fs.readFileSync(`${name}.txt`, { encoding: "utf8" });

  console.log(file);
};

const addNote = (name, note) => {
    console.log(note);
  fs.appendFile(`${name}.txt`, note, () => {
    console.log("Note updated");
  });
};

module.exports = { createNote, getNote, addNote };
