const fs =  require('fs');

function addNotes(title,body){
    // console.log(title)
    // console.log(body)
    const notes = loadNotes();
    const duplicateTitle = notes.filter(function(notes){
        return notes.title===title
    })
    if(duplicateTitle.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log("your notes has  benn added")
    }

    else{
        console.log("Please try again with unique title")
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("19notes.json",dataJSON);
}

function loadNotes(){
    try{
        const dataBuffer = fs.readFileSync("19notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    }
    catch(e)
         {   return []
    }
}


module.exports = {
    addNotes:addNotes,
    loadNotes:loadNotes
}