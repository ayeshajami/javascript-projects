const express  = require('express');
const app = express();
const port =8080;
const path = require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.rander("hello");
});
app.get("/rolldic", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1; // random dice 1-6
    res.render("rolldic", { num });  // pass num to rolldic.ejs
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});