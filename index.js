const express = require('express');
const app=express();


let port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});


app.use((req,res)=>{
    console.log(req);
    console.log('server is running');
    res.send({
        name:"apple",
        color:"red",
    });
});