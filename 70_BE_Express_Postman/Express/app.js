const express = require("express")
const path = require("path")
const app = express();
const port = 80;

//nodemon app.js
//Serving static files
app.use('\static', express.static('static'))

// npm install pug
// Set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

// our pug demo endpoint
app.get("\demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey Kudo', message: 'Hello Kudo thx for teachin me pubg!'})
})

app.get("/", (req, res)=>{
    res.status(200).send("This is homepage of my first express app with Harry")
});
app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry")
});

app.post("/about", (req, res)=>{
    res.send("This is a post request of my first express app with Harry")
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found!!")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})