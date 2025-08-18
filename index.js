
function rollDice(){
let rand=Math.floor(Math.random()*6)+1;
console.log("rand");
}
rollDice();

function printName(name){
    console.log(name);
}
 printName("Aisha");

 function printInfo(name,age){
    console.log(name);
    console.log(age);
}
 printInfo("Aisha");
  printInfo(21);


 function sum(a,b){
    console.log(a+b);
 }

 sum(1,3);
sum(4,5);


function avg(a,b,c){ 

    let avg=(a+b+c)/3;
    console.log(avg);

}
avg(5,6,7);