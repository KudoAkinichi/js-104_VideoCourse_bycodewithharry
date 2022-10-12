https://www.codewithharry.com/videos/web-development-in-hindi-85/


MongoDb Tutorial: MongoDb Compass & Installing Mongoose | Web Development Tutorials #85
MongoDb Tutorial- MongoDb Compass and Installing Mongoose
In this tutorial, we are going to learn about Mongoose and how to use it in MondoDb. Although most of you must be thinking that Mongoose and Mongo are similar things but they have a lot of differences in them. Mongoose will help you to access MongoDb directly without any hindrance.

First let us understand what MongoDb Compass is? After writing “compass” in your search tab, you will get a window like this-



Before knowing about MongoDb compass and its use, we will initiate our Mongod process as usual as it is the main database process. MongoDb Compass’s task is similar to that of Mongo Shell but in an easier way.


MongoDB Compass analyzes your documents and displays rich structures within your collections through an intuitive GUI. It allows you to quickly visualize and explore your schema to understand the frequency, types and ranges of fields in your data set.

It does not let you type the commands. It’s not the matter that we cannot type the commands but a person who is managing a database and wants to add certain data without any coding, he can use MongoDb compass.

For connecting the MongoDb Compass with Mongo database, you need to click on New Collection > Fill in Connection Fields Individually > Connect. After following the above steps you will get the output as follows-



It is showing all the databases which we have created till now. Since we are working with harryKart, we will click on it. Now we can see all our collections as follows-



So the things that we were doing earlier with terminals, and command on MongoD, now we can do it by MongoDb Compass GUI.


One point to note here is there is no need to write rating, price, or any other schemas while working with MongoDb compass. It provides you all types of flexibility. Also you can take help of filters to find your schemas as shown here-



Let us now see how to connect this MongoDb compass to Node.Js. We can do this with the help of Mongoose. It is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful.


We will make a new folder as Mongoosetut. We will open the terminal window and install npm. After installing the package.json file we will write npm install mongoose to install the mongoose.

You will get the output as follows-



Now we have to write the following code to connect the database through node-

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
After executing the file you will find that your file is connected with the server.

So I hope you must have got the basic idea of how to use MongoDb Compass with Node.Js. In the upcoming tutorials, we will learn how to perform the CRUD operations using Node.Js.