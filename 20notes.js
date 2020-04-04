const fs=  require('fs');
const chalk = require('chalk');

const removeNotes=function(title){
    const notes = loadNotes();
    
    const dup = notes.filter(function(notes){
        return notes.title !== title;
    })
     
    if(notes.length>dup.length){
    saveNotes(dup)
    console.log(chalk.bgRed.green("note removed"))
    }   
    else{
  return console.log(chalk.bgGreen.red("note not found")) 
    }
}

function saveNotes(notes){
    const data =JSON.stringify(notes);
    fs.writeFileSync("20notes.json",data)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('20notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    }
    catch{
        return [];
    }
}


module.exports ={
    removeNotes :removeNotes
}




/**if(notes.length===0){
        console.log("Nothing to delete")
    }
    else{
        const len = notes.length;
        console.log("there are "+len+" elements");

        const index = notes.includes(title);
        if(!index)  return console.log("THEre was no item matching with the criteria")
        
        const i = notes.indexOf(title)
        notes.replace(notes[i])

        saveNotes(notes)
        
    } */