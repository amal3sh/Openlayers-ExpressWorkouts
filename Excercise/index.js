const express = require("express");
const path = require("path");
const app  = express();
const PORT = 5000;
const cors = require('cors');;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','map.html'));
});
app.listen(PORT,()=>console.log("Server started"));
app.post('/api/uploadData',(req,res,next)=>{
    console.log(req.body);
    res.status(200).json({"Success":"ok"})
})