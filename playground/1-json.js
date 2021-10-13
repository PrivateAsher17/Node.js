const fs = require('fs')
// const book={
//     title: "EGO is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON);

// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData);

// fs.writeFileSync("1-json.json",bookJSON)

const dataBuffer = fs.readFileSync("2-json.json")
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Ashwani"
data.age = "22"

const dataJSON2 = JSON.stringify(data)
fs.writeFileSync("2-json.json",dataJSON2)
console.log(data);