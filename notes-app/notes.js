const fs = require("fs")
const chalk = require("chalk")
const getNotes = ()=> "Your Notes..."


const addNote = (title, desc)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title )

    if (duplicateNotes.length === 0){
        notes.push({
            title:title,
            desc:desc
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"));
    }
    else{
        console.log(chalk.red.inverse("Note title taken!"));
    }

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes' Title: "));
    notes.forEach((note)=>{
        console.log(note.title);
    })
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title!==title)
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Success... Note Removed"));
    }
    else{
        console.log(chalk.red.inverse("No such Note Found!"));
    }
    saveNotes(notesToKeep)
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
                    getNotes:getNotes, 
                    addNote:addNote,
                    removeNote:removeNote,
                    listNotes:listNotes
                }