const express = require('express');
const app=express();


let port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
app.get('/',(req,res)=>{
     res.send('hello  i am root');
});
app.get('/:username/:id',(req,res)=>{
    console.log(req.params);
  res.send('hello world i am root');
});

// app.use((req,res)=>{
    
//     console.log('server is running');
//     let code=`<h1>hello world</h1><ul><li>home</li><li>about</li><li>contact</li></ul>`;
//     res.send(code);
// });

// app.get('/',(req,res)=>{
//     res.send('hello world i am root');
// });
// app.get('/apple',(req,res)=>{
//     res.send('hello apple');
// });
// app.get('/orange',(req,res)=>{
//     res.send('hello orange');
// });