const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: 'string'
    },
  },
  handler({ title, body }) {
    notes.addNote(title, body);
  },
})

yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: 'string'
    },
  },
  handler({ title }) {
    notes.removeNote(title);
  },
})

yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    // notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: 'string'
    },
  },
  handler({ title }) {
    notes.readNote(title);
  },
});


yargs.parse()