https://www.codewithharry.com/videos/web-development-in-hindi-66/


Backend Tutorial: Blocking vs Non-Blocking execution | Web Development Tutorials #66
In this tutorial, we will learn how to serve HTML files using NodeJs. Backend is all about serving the files. The primary task in the backend is to serve the files according to the requests of the user. 

We will start by making a new file as tut66.html and then serve any basic HTML file. Now we will make a new server and see how to serve it according to the user’s request. The code for this goes as follows-

const http = require('http');
const fs = require('fs');
Now we will write the line of code to read a file as follows-

const fileContent = fs.readFileSync('tut61.html')
The final step is to make the server and serve the file. The code for the following is as follows-

const server = http.createServer((req, res)=>{
res.writeHead(200, {‘Content-type’ : ‘text/html’}); 
res.end(fileContent)
Till now we have made the server and now we will make this server listen on its port. Suppose we want to make it listen to port 80, so the code for this goes as follows-

server.listen(80, ‘127.0.0.1’, () => {
    console.log(“Listening on port 80”);
  });
After saving and then executing the above code, we get the output as follows-



And if we go to our localhost server, we get the output as follows-



The reason for listening to the server at port 80 was, we do not have to explicitly write anything else in the URL. For example, if we have taken 8000, then we have to explicitly write it on the URL to get the request back.


So I hope you must have understood how to serve the basic HTML file. In the upcoming videos, we will see how to serve the different pages like about us, contact us, or services manually. Also, we will learn how to serve these pages with the help of Node modules. So stay with the tutorials.