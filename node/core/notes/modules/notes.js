const chalk = require("chalk");
const fs = require("fs");
const { returnNotes, updateNotes } = require("../utils");

const filePath = "./data/index.json";

const readNote = (noteTitle) => {
  try {
    const notes = returnNotes(filePath);

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
};

const listNotes = () => {
  try {
    const notes = returnNotes(filePath);

    console.log(
      chalk.white.bold.bgBlack(
        "All notes: ",
        notes.map(({ title, body }) => `${title} - ${body}`).join(", ")
      )
    );
  } catch (error) {
    console.log(chalk.white.bold.bgRed(error.message));
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

    console.log(chalk.white.bold.bgGreen(`${note.title} added successfully`));

    readNotes();
  } catch (error) {
    console.log(chalk.white.bold.bgRed(error.message));
  }
};

const removeNote = (noteTitle) => {
  try {
    let notes = returnNotes(filePath);

    const noteExists = notes.find(({ title }) => noteTitle === title);

    if (!noteExists) {
      throw new Error("Note doesn't exist.");
    }

    notes = notes.filter(({ title }) => title !== noteTitle);

    updateNotes(filePath, notes);

    console.log(chalk.white.bold.bgGreen(`${noteTitle} removed successfully`));

    readNotes();
  } catch (error) {
    console.log(chalk.white.bold.bgRed(error.message));
  }
};

module.exports = { listNotes, addNote, removeNote, readNote };
