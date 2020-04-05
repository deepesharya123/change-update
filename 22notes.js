const fs= require('fs');
const chalk = require('chalk');

const getNotes = (message)=> {
    return message
};

// function saveNotes(notes){
//     const data =JSON.stringify(notes);
//     fs.writeFileSync("20notes.json",data)
// }

// const loadNotes = function(){
//     try{
//         const dataBuffer = fs.readFileSync('20notes.json')
//         const dataJson = dataBuffer.toString();
//         return JSON.parse(dataJson)
//     }
//     catch{
//         return [];
//     }
// }

const addNote = (title,body) => {
    const notes=  loadNotes();
    console.log(notes.length )
    const  duplicatenote =  notes.filter((notes) => notes.title ===title )

    if(duplicatenote.length === 0){
        notes.push({
            title:title,
            body:body
        })

        savenote(notes)
        console.log("notes have been added")
    }
    else return console.log(chalk.red.bgWhite("this title already exist please try again with new title"))
    


    // console.log(notes)
}


const removeNotes= (title)=>{
    const notes = loadNotes();
    
    const dup = notes.filter(  (notes) =>  notes.title !== title )
     
    if(notes.length>dup.length){
        savenote(dup)
    console.log(chalk.bgRed.green("note removed"))
    }   
    else   return console.log(chalk.bgGreen.red("note not found")) 

}

const savenote = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}

function loadNotes(){
        try{

            const dataBuffer = fs.readFileSync('notes.json');
            const dataJson = dataBuffer.toString();
            return JSON.parse(dataJson);
        }
        catch(e){
            return []
        }
    }



module.exports  = {
    // getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes
};

