const joke = require('give-me-a-joke');
const color= require('colors');
joke.getRandomDadJoke((jk)=>{
    console.log(jk.rainbow);
});