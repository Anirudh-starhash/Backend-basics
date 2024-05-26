import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"

const _dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    const today=new Date();
    const day=today.getDay()
    // console.log(day)
    var type="a weekday"
    var advice="It's time to work hard!"

    if(day===0 || day===6){
        type="the weekend";
        advice="You have to chill today!";
    }
    res.render(
        _dirname+"/views/index.ejs",
        {dayType:type,advice:advice}
    );
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});