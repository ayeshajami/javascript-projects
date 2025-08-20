let btns=document.querySelectorAll("button");


 for (btn of btns){
btn.onclick = sayHellow;
  btn.onmouseenter = function ()
  {
    console.log("you entered a button");
  }
  console.dir(btn);
 }
function sayHellow(){
  alert("Hello!");
}


