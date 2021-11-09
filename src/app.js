const express = require('express');
const path = require('path')
const hbs = require('hbs');
const app = express();
const Register = require('./models/register');
const exp = require('constants');
const md5 = require('md5');

const port = process.env.PORT || 3000
require("./db/conn");
app.use(express.static(__dirname + '../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("index");
})
app.post("/register", async     (req, res) => {
    try {
        const Registeruser = new Register({
            fullname: req.body.FullName,
           number: req.body.PhoneNumber,
            password: md5(req.body.Password),
            email: req.body.email
        })
        
        const dataadded = await Registeruser.save();
        console.log(Registeruser);
        res.send(dataadded);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("App running on http://localhost:" +port);
})