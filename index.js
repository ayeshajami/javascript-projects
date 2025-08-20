let btn=document.querySelector("button");

btn.addEventListener("click",function(){
  console.log(this);
  this.style.background="blue";
});