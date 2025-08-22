let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started== false){
    console.log("game started");
    started=true;

    levelup();
}
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    btnFlash();
}