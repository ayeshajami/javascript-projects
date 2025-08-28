const url="https://icanhazdadjoke.com/";

async function name() {
  try{
    let res=await axios.get(url);
    console.log(res);
  }catch(err){
    console.log(err);

  }
  
}