const url="https://icanhazdadjoke.com/";

async function name() {
  try{
    const config={headers:{Accept:"application/json"}};
    let res=await axios.get(url,config);
    console.log(res);
  }catch(err){
    console.log(err);

  }
  
}