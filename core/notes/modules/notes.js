const chalk = require("chalk");
const { returnNotes, updateNotes } = require("../utils");

class Notes {
  filePath = "./data/index.json";

  readNote(noteTitle) {
    const notes = returnNotes(this.filePath);

    const note = notes.find(({ title }) => title === noteTitle);

    if (!note) {
      throw new Error("Note does not exist");
    }

    return note
  }

  listNotes() {
    const notes = returnNotes(this.filePath);

    return notes;
  }

  addNote(note) {
    let notes = returnNotes(this.filePath);

    const noteExists = notes.find(({ title }) => note.title === title);

    if (noteExists) {
      throw new Error("Note already exists");
    }

    notes = [...notes, note];

    updateNotes(this.filePath, notes);

    return note;
  }

  removeNote(noteTitle) {
    let notes = returnNotes(this.filePath);

    const noteExists = notes.find(({ title }) => noteTitle === title);

    if (!noteExists) {
      throw new Error("Note doesn't exist.");
    }

    notes = notes.filter(({ title }) => title !== noteTitle);

    updateNotes(this.filePath, notes);

    return noteTitle;
  }
}

module.exports = Notes;
