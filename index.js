const square=(n)=> n*n;


  let id =setInterval(()=>{
    console.log("Hello");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);