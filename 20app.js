const yargs = require('yargs')
const dataUtility = require('./20notes')

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
    handler:function(argv){
        dataUtility.removeNotes(argv.title)
    }
})

yargs.parse();