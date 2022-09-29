const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const fs = require("fs")
const app = express();
const port = 8000;


// EXPRESS SPECIFIC STUFF:
app.use('\static', express.static('static')) //Serving static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// PUG SPECIFIC STUFF:
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})
