const fs = require("fs");

const createNote = (name, initialData) => {
  return fs.writeFileSync(`${name}.txt`, initialData);
};

const readNote = (name) => {

  console.log(name);
  const file = fs.readFileSync(`${name}.txt`, { encoding: "utf8" });

  console.log(file);
};

const addNote = (name, note) => {
  console.log("ADD: ", note);
  fs.appendFile(`${name}.txt`, note, () => {
    console.log("Note updated");
  });
};

const removeNote = (name) => {
  fs.unlink(`${name}.txt`, () => {
    console.log("Note removed");
  });
};

module.exports = { createNote, readNote, addNote, removeNote };
