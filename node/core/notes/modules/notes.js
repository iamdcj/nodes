const chalk = require("chalk");
const { returnNotes, updateNotes } = require("../utils");

class Notes {
  filePath = "./data/index.json";

  readNote(noteTitle) {
    try {
      const notes = returnNotes(this.filePath);

      const noteExists = notes.find(({ title }) => title === noteTitle);

      if (!noteExists) {
        throw new Error("Note does not exist");
      }

      console.log(
        chalk.white.bold.bgGreen(`${noteExists.title} - ${noteExists.body}`)
      );
    } catch (error) {
      console.log(chalk.white.bold.bgRed(error.message));
    }
  }

  listNotes() {
    try {
      const notes = returnNotes(this.filePath);

      console.log(
        chalk.white.bold.bgBlack(
          "All notes: ",
          notes.map(({ title, body }) => `${title} - ${body}`).join(", ")
        )
      );
    } catch (error) {
      console.log(chalk.white.bold.bgRed(error.message));
    }
  }

  addNote(note) {
    try {
      let notes = returnNotes(this.filePath);

      const noteExists = notes.find(({ title }) => note.title === title);

      if (noteExists) {
        throw new Error("Note already exists");
      }

      notes = [...notes, note];

      updateNotes(filePath, notes);

      console.log(chalk.white.bold.bgGreen(`${note.title} added successfully`));

      readNotes();
    } catch (error) {
      console.log(chalk.white.bold.bgRed(error.message));
    }
  }

  removeNote(noteTitle) {
    try {
      let notes = returnNotes(this.filePath);

      const noteExists = notes.find(({ title }) => noteTitle === title);

      if (!noteExists) {
        throw new Error("Note doesn't exist.");
      }

      notes = notes.filter(({ title }) => title !== noteTitle);

      updateNotes(filePath, notes);

      console.log(
        chalk.white.bold.bgGreen(`${noteTitle} removed successfully`)
      );

      readNotes();
    } catch (error) {
      console.log(chalk.white.bold.bgRed(error.message));
    }
  }
}

module.exports = Notes;
