let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//   console.log("key was pressed");
// });

inp.addEventListener("keyup", function () {
  console.log("key=",event.key);

  if(event.key =="Arrowup"){
  console.log("character moves forward");
  else if(event.key =="ArrowDown"){
  console.log("character moves backward");
  else if(event.key =="ArrowLeft"){
  console.log("character moves left");
  else if(event.key =="ArrowRight"){
  console.log("character moves right");
}
});

