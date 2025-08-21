let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//   console.log("key was pressed");
// });

inp.addEventListener("keyup", function () {
  console.log("key=",event.key);
console.log("key=",event.code);
  console.log("key was realeased");
});

