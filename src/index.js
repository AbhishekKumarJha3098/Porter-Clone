const express = require('express');
const Enterprise = require("./models/enterprise.model.js")
const path = require("path")
const app = express();
const Packer = require("./models/packer.js")
const Estimate = require("./models/home.model.js")
const Driver = require("./models/d&p.model.js")

app.use(express.json());

app.set('view engine', 'ejs');

const static = path.join(__dirname, "../public")
app.use(express.urlencoded({extended:false}))
app.use(express.static(static))
app.get("", (req, res)=>{
    res.render("home");
})
app.get("/forEnterprise", (req, res) => {
  res.render("forEnterprise");
})
app.get("/home", (req, res) => {
  res.render("home");
})
app.get("/packers&movers", (req, res) => {
  res.render("packers&movers");
})

app.get("/driver&Partner", (req, res) => {
  res.render("driver&Partner");
})
app.post("/contact", async (req, res) => {
//   res.send(req.body)  
  const userData = new Packer(req.body);
  await userData.save();
  
})
app.post("/d&p", async (req, res) => {
  //   res.send(req.body)  
  const userData = new Driver(req.body);
  await userData.save();

})
app.post("/enterprise", async (req, res) => {
  const userData = new Enterprise(req.body);
  await userData.save();

})
app.post("/getestimate", async (req, res) => {
  const userData = new Estimate(req.body);
  await userData.save();
  res.render("fare_estimate")

})

module.exports = app;