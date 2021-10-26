//Script For ScoreKeeper
const player2=document.querySelector("#player2");
const player1=document.querySelector("#player1");
const player1Btn=document.querySelector("#player1Btn")
const player2Btn=document.querySelector("#player2btn")
const reset=document.querySelector("#resetbtn")
player1Btn.addEventListener("click",()=> {
    const selector=document.querySelector("#selector");
    const bestof=parseInt(selector.value);
    selector.disabled=true;
    player1.innerText=parseInt(player1.innerText)+1;
    if(parseInt(player1.innerText)>=(Math.floor(bestof/2)+1))
    {
    player1Btn.disabled=true;
        player2Btn.disabled=true;
        player1.setAttribute("class","has-text-success")
        player2.setAttribute("class","lose")
    }
})
player2Btn.addEventListener("click",()=>{
    const selector=document.querySelector("#selector");
    const bestof=parseInt(selector.value);
    selector.disabled=true;
    player2.innerText=parseInt(player2.innerText)+1;
    if(parseInt(player2.innerText)>=(Math.floor(bestof/2)+1))
    {
    player1Btn.disabled=true;
        player2Btn.disabled=true;
        player2.setAttribute("class","has-text-success");
        player1.setAttribute("class","has-text-danger");
    }
})
reset.addEventListener("click",()=>{
    const selector=document.querySelector("#selector");
    const bestof=parseInt(selector.value);
    player1.innerText=0;
    player2.innerText=0;
    selector.disabled=false;
    player1Btn.disabled=false;
    player2Btn.disabled=false;
    player1.removeAttribute("class");
    player2.removeAttribute("class");
})