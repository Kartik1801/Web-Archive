//Cryptonator API :https://api.cryptonator.com/api/ticker/btc-usd
// Methond 1 : USIng XMLHtmlRequest
/* 
const req = new XMLHttpRequest();
req.onload =function (){
console.log("Loaded")   
console.log("Current Value of BTC : USD",JSON.parse(this.responseText).ticker.price)
}
req.onerror =function (err){console.log("Error : ", err)}
req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
req.send()
*/
//-----------------------------------------------------------------------------------------
//Method 2 : Using fetch API :
/*
const req= fetch('https://api.cryptonator.com/api/ticker/btc-usd') 
req.then(res =>{
    //console.log("Response {Waiting to be parsed}=>",res);// resolves the promise as soon as 'header' is recieved!!! doesnt contain required data.
   return res.json();//returns a promise
})
.then(parsed=>{
   // console.log("Data parsed =>",parsed);
    console.log("Current Value of BTC  => USD",parsed.ticker.price);
})
req.catch(err=>{
    console.log("Error : ", err);
}) 
*/
//-----------------------------------------------------------------------------------------
//Using async function with fetch API :
/* 
const req = async() => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = res.json();
        console.log(data.ticker.price);
    } catch (err) {
        console.log("Error : ", err);
    }
} 
*/