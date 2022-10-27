const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");


const args = yargs.argv

const isAdd = args.add;
const message = args.message

if (isAdd) {
  notes.addNote("test", message);
} else {
//   notes.removeNote("test");
}
