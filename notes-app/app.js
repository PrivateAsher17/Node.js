const notes = require("./notes.js")
// const validator = require("validator")
// const fs = require('fs')

// fs.appendFileSync('notes.txt','I am a software Engineer')

// const name = "Ashwani"
// const sum=add(4,-2)
// const op = getNotes()
// console.log(op);
// console.log(validator.isEmail("email@gmail.com"))

const chalk = require("chalk")
// console.log(chalk.green.bold("Success..."));
const yargs = require("yargs")
// console.log(process.argv)

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        desc:{
            describe:"Note Description",
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        // console.log("Adding a new note!",argv);
        // console.log("Title : "+argv.title);
        // console.log("Description :"+argv.desc);
    }


})
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler: function(){
        console.log("Listing your notes...");
    }
})
yargs.command({
    command:'read',
    describe:'Reading your notes',
    handler: function(){
        console.log("Reading your notes");
    }
})

yargs.parse()

// console.log(yargs.argv);

