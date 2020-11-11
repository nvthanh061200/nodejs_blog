const express = require('express')
const app = express()
 const port=3000;
app.get('/abc',(req, res)=> {
    var a=1;
    var b=2;
    var c=a+b;
    
  res.send('Hello World'+c)
})
 
app.listen(port,()=>{console.log(`đang lăng nghe port ${port}`)});