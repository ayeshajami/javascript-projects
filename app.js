let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getfacts();   // ✅ match the function name
  console.log(fact);
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;   // ✅ the API returns "fact" not "facts"
  } catch (e) {
    console.log("Error - ", e);
    return "no fact found";
  }
}
