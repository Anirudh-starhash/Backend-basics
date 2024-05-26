//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app=express()
const _dirname=dirname(fileURLToPath(import.meta.url))

const port=3000

app.use(bodyParser.urlencoded({extended:true}))

var userAuthorized=false

function passwordCheck(req,res,next){
    console.log(req.body);
    const password=req.body["password"];
    console.log(password);
    if(password==="ILoveProgramming"){
        userAuthorized=true;
    }
    next();
};

app.use(passwordCheck);

app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");
});

app.post("/check", (req,res)=>{
    if(userAuthorized){
        res.sendFile(_dirname+"/public/secret.html");
    }else{
        res.sendFile(_dirname+"/public/index.html")
        // res.redirect("/") or can use this too;
    }
});

app.listen(port, ()=>{
    console.log(`Server is runnung at ${port}`);
});