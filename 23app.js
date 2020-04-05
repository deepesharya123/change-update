const chalk = require('chalk')
const yargs = require('yargs');
const notesutility = require('./notes.js');

const command = process.argv[2];

yargs.version('1.1.0');


yargs.command({
    command:'add',
    describe:"for adding a note",
    bulder:{
        title:{
            describe:"Mote title",
            demandOption:true,
            type:String
        },
        body:{
            describe:"this is the body",
            demandOptionn:true,
            type:String
        }
    },
    handler(argv){
        notesutility.addNote(argv.title,argv.body)

    }
})

yargs.command({
    command:"remove",
    describe:"to remove the note",
    builder:{
        title:{
            describe:"this is the title",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        notesutility.removeNotes(argv.title)
    }
})

// for removing command
// yargs.command({
//     command:'remove',
//     describe:'Remove a note',
//     handler:function(){
//         console.log("removing the command")
//     }
// })

yargs.command({
    command:'read',
    describe:"for reading the note",
    handler(){
        console.log("Reading the data ")
    }
})

yargs.command({
    command:'list',
    describe:"this will list up the command in the order",
    handler(){
        console.log("liste up the data")
        notesutility.listNotes()
    
    }
})

yargs.parse()
// console.log(yargs.argv)