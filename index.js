let btn=document.querySelector("button");
console.dir(btn);
// btn.onclick = function(){
//   console.log("Button clicked!");
//   alert("button clicked!");
// }

function sayHellow(){
  alert("Hellow!");
}

btn.onlick=sayHellow;
