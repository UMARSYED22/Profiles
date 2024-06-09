const express = require("express");
const path = require("path");
const userModel=require("./models/user")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ Extented: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
    res.render("index");
})
app.get("/read", async function (req, res) {
   let allUsers= await userModel.find();
  res.render("read",{users:allUsers});
});
app.post("/create", async function (req, res) {
   let { name, email, image }=req.body;
    let user=await userModel.create({
        name: name,
        email: email,
        image:image
    })
    res.redirect("/read");
});
app.get("/delete/:id", async function (req, res) {
    let deleteduser = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});
app.get("/edit/:userid", async function (req, res) {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render("edit", { user });
});
app.post("/update/:userUpdateid", async function (req, res) {
    let { name, email, image } = req.body;
  let user = await userModel.findOneAndUpdate({ _id: req.params.userUpdateid },{name,email,image},{new:true});
  res.redirect("/read");
});


app.listen(3000);