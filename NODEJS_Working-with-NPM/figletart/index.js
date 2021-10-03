const figlet=require('figlet')
const color=require('colors')
figlet('Hello !',(e,data)=>{
    if(e){
        console.log('Something went wrong');
        console.dir(e);
        return;
    }
    else
        console.log(data.rainbow);

})