// Script to create Directory based on passed arguments with html css and js files.
const fs = require('fs');
const path = require('path')
const folderName= process.argv.slice(2);
if(folderName[0]){
 folderName.forEach(element => {
 try{
    fs.mkdirSync(element);
    fs.mkdirSync(`${path.join(element)}/Assets`);
    fs.writeFileSync(`${path.join(element,'index.html')}`,'');
    fs.writeFileSync(`${path.join(element,'/Assets/app.css')}`,''); 
    fs.writeFileSync(`${path.join(element,'/Assets/app.js')}`,''); 
    console.log(`Created Boilerplate at ${element}`)
 }
 catch(e){
    console.log("Something is wrong!");
    console.log(e);
 }
 });
}
else {
    console.log("Provide folder name");
}