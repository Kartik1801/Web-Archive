// Language Guesser
const args=process.argv[2];
const franc=require('franc');
const lang = require('langs');  
element=args;
const code=franc(element);
if(code!='und')
    console.log(lang.where('3',code).name);
else
    console.log('Could not Find a proper match. Try Another Sample');        
