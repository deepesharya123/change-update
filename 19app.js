const dataUtility = require('./19notes')
const fs = require('fs');
const yargs = require('yargs');

yargs.command({
    command:"add",
    describe:"to add the notes",
    builder:{
        title:{
            describe:"this is the title",
            demandOption:true,
            type:String
        },
        body:{
            describe:"this is the body",
            demandOption:true,
            type:String
        },
    },
    handler : function  (argv){
        dataUtility.addNotes(argv.title,argv.body)
        // dataUtility.addNotes()
        
    } 

})

yargs.parse();