const yargs = require('yargs');

yargs.command({
    command:"add",
    describe:"adding the note",
    builder:{
        title:{
            describe:"this is the title of the comand",
            demandOption:true,
            type:String
        },
        body:{
            describe:"this is the body of the comand",
            demandOption:true,
            type:String
        }
    },
    handler:function(argv){
        //  ad both the body and the title is required so it is neccessary to pass both  the arguemnet
        console.log("This the title : ",argv.title);
        console.log("This the body : ",argv.body);
    }
})

yargs.parse();