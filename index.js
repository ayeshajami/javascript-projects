let form=document.querySelector("form");

form.addEventListener("submit",function(event){
  event.preventDefault();
 
  let input=document.querySelector("input");
  console.dir(inp);
  console.log(inp.innerText);
});