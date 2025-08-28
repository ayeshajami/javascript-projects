let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
  console.log("Button clicked");
});




let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    console.log(res);
  } catch (e) {
    console.log("Error - " + e);
  }
}
