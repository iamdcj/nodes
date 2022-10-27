const fs = require("fs");
const { returnNotes, updateNotes } = require("../utils");

const filePath = "./data/index.json";

const createNote = (name, initialData) => {
  return fs.writeFileSync(`${name}.txt`, initialData);
};

const readNotes = () => {
  try {
    const notes = returnNotes(filePath);

    console.log("All notes: ", notes);
  } catch (error) {
    console.error("Unable to read notes");
  }
};

const addNote = (note) => {
  try {
    let notes = returnNotes(filePath);

    const noteExists = notes.find(({ title }) => note.title === title);

    if (noteExists) {
      throw new Error("Note already exists");
    }

    notes = [...notes, note];

    updateNotes(filePath, notes);

    readNotes();
  } catch (error) {
    console.error(error.message);
  }
};

const removeNote = (noteTitle) => {
  try {
    let notes = returnNotes(filePath);

    notes = notes.filter(({ title }) => title !== noteTitle);

    updateNotes(filePath, notes);

    console.log(`${noteTitle} removed successfully`);

    readNotes();
  } catch (error) {
    return "Unable to read notes";
  }
};

module.exports = { createNote, readNotes, addNote, removeNote };
