https://www.codewithharry.com/videos/web-development-in-hindi-71/


Backend Tutorial: Writing our first Express App | Web Development Tutorials #71
As in the last tutorial, we have discussed Express and how to install and use it. Finally, now we will create our first express app. Previously, in the 67th tutorial, we have made the custom backends about different pages i.e. about us, contact us, services, etc. In this tutorial, we will create the same custom backends but with the help of express. 

Moving on to the express directory, we will write node app.js in the terminal window to get the app.js file. Now we will write as follows-

const express = require("express");
const app = express();
const port = 80;
Through the above codes, we have installed the module and at the same time created an express app. Then we will write as follows-

app.get("/", (req, res)=>{ 
    res.send("This is homepage of my first express app with Harry");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

Now we have to start the app by writing node app.js and will get the output as follows-



We can also test the app in the Postman app by sending a get request on the local server. The benefit of using port 80 is, the server works on the local server.


Now we can create endpoints of different pages also as follows-

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});
If we now send the get request from the Postman app, we get the output as follows-



In the same way, we can create the post request of the same endpoint as follows-

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
And now if we run by selecting the post request through Postman, we get the output as follows-



Simply get request is used to handle all the get requests of all the endpoints and post request is used to manage all the post requests of all the endpoints. 


Suppose, if we want to send the json and status code together, so we can write as follows-

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});
If we run the above code through Postman, we get the output as follows-



We can also send the status as “404” as follows-

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});
So I hope you have understood how to create basic website routes with the help of express. After learning all these things, we are somewhat ready to make our own custom backends. And to learn more, stay with the tutorials.