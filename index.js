const path = require("path")
const fs = require("fs")
path.join(__dirname , "text.tet")
fs.writeFile("text.txt" , "Hello World" , (err, data) =>{
    if(err){
        console.log("Error")
    }
    console.log(data)

});