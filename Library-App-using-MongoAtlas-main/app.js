const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://sahil1309:$Sahil189209111@cluster0.yrg0q.mongodb.net/Library_Data?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(() => console.log("connected to Database"))
app.use(express.json())
app.post("/add-new-student", async(req, res) => {

    const mybook = req.body.Book;
    const myname = req.body.Name;
    const mydue = req.body.Due;

    try {
        const newproject = new mySchema({
            Book: mybook,
            Name: myname,
            Due: mydue
        })
        const savedproject = await newproject.save()
        res.json({ "message": "Student is saved", "data": savedproject })
    } catch (err) {
        res.json(err);
    }
})

app.use("/", (req, res) => {
    //res.send("Hello");
    res.json({ "message": "Express server started" })
})

app.listen(3001, () => console.log("Express Server Strarted"))
