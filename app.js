let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getfacts();   
  console.log(fact);
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;  
    console.log("Error - ", e);
    return "no fact found";
  }
}
