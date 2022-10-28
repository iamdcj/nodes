const chalk = require("chalk");
const yargs = require("yargs");
const Notes = require("./modules/notes");

const notesService = new Notes()

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
    notesService.addNote({ title, body });
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
    notesService.removeNote(title);
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
    notesService.readNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    notesService.listNotes();
  },
});

yargs.parse();
