
function savetoDb(data){
    
  return new Promise((success,failure)=>{
  let internetSpeed=Math.floor(Math.random()*10)+1;
  if (internetSpeed>4){
    resolve("data was saved");
  }else{
    reject("data was not saved");
  }
  });
}

let request =savetoDb("Apna college");
request.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
});