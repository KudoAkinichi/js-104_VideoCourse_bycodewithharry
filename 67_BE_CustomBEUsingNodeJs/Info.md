https://www.codewithharry.com/videos/web-development-in-hindi-67/


Backend Tutorial: Creating a Custom Backend Using NodeJs | Web Development Tutorials #67
In this tutorial, we are going to learn how to create a custom backend using NodeJs. Backend simply means serving the files based upon user requests. This time we will create a new folder as tut67 and create a file as index.js inside it.

To make the server the code begins as-

const http = require('http');
const fs = require('fs');
Now we will make random localhost and port to listen as follows-

const hostname = '127.0.0.1';
const port = 3000;
We will now create a server and gives it an arrow function as follows-

const server = http.createServer((req, res)=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(‘Hello World’);
And finally, we will make the port to listen-

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
After executing this, we have to go to tut67 > index.js as follows-




Now to get the requests of different pages, we make their files and read them as follows-

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')
We will now make 4 different files like index.html, about.html, services.html, and contact.html. In index.html file, we will some basic HTML and serve the following file back in index.js as follows-

res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
res.end(home);
After executing the above file, we get the output as follows-




Now if we want that these URLs should serve different files as we click on about us, contact, or services. But before that, we can write the basic HTML codes in all the other pages. Now, we can take the help of if-else as follows-

 res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});
Now if we click on services, we get the output as follows-



The same happens with all the other sections. This is an example of a custom backend.

So I hope you must have understood how to make a custom backend to serve the different files. This was a basic understanding of how we can design custom backends. But in the upcoming tutorials, we will learn how to make them with the help of express, a module of NodeJs.