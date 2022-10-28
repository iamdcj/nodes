const chalk = require("chalk");
const yargs = require("yargs");
const Notes = require("./modules/notes");

const notesService = new Notes();

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title, body }) {
    try {
      const addNote = notesService.addNote({ title, body });

      console.log(
        chalk.white.bold.bgGreen(`${addNote.title} added successfully`)
      );
    } catch (error) {
      console.error(error.message);
    }
  },
});

yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    try {
      const removeNote = notesService.removeNote(title);

      console.log(
        chalk.white.bold.bgGreen(`${removeNote} removed successfully`)
      );
    } catch (error) {
      console.error(error.message);
    }
  },
});

yargs.command({
  command: "read",
  describe: "Reads an individual note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    try {
      const note = notesService.readNote(title);

      console.log(chalk.white.bold.bgGreen(`${note.title} - ${note.body}`));
    } catch (error) {
      console.error(error.message);
    }
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    try {
      const notes = notesService.listNotes();

      console.log(
        chalk.white.bold.bgBlack(
          "All notes: ",
          notes.map(({ title, body }) => `${title} - ${body}`).join(", ")
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  },
});

yargs.parse();
