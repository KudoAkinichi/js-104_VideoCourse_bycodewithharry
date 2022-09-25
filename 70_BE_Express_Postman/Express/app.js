const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF:
//nodemon app.js
app.use('\static', express.static('static')) //Serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF:
// npm install pug
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory


// // our pug demo endpoint
// app.get("\demo", (req, res)=>{
//     res.status(200).render('demo', {title: 'Hey Kudo', message: 'Hello Kudo thx for teachin me pubg!'})
// })

// app.get("/", (req, res)=>{
//     res.status(200).send("This is homepage of my first express app with Harry")
// });
// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry")
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request of my first express app with Harry")
// });

// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found!!")
// });

// Dir setting tips:
// cd .\70_BE_Express_Postman\Express
//ls
// check directory dir


// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This the best game with lots of waifus and has nice story"
    const params = {'title': 'Genshin is the best game!', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at address ${address}. More about him/her: ${more}`

    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})
