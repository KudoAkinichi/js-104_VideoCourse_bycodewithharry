1. npm init , npm install express , npm install pug
2. const express = require("express")
const path = require("path")
const app = express();
const port = 8000;


// EXPRESS SPECIFIC STUFF:
app.use('\static', express.static('static')) //Serving static files
app.use(express.urlencoded())

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

Copy paste these stuffs^^

3. search pug documentation and add configure index.pug
4. make style.css and index.js 