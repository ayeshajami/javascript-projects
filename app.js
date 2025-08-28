let url="https://catfact.ninja/fact";



async function getfacts() {
  try{
    let res=await axios.get(url);
    console.log(res);
  }catch (e){
    console.log("Error-"e);
  }
}