import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var firstName="";
var lastName="";

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  firstName=req.body["fName"];
  lastName=req.body["lName"];
  res.render("index.ejs",{numberOfLetters:firstName.length+lastName.length})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
