https://www.codewithharry.com/videos/web-development-in-hindi-84/


MongoDb Tutorial: Updating data from the Mongo Database | Web Development Tutorials #84
MongoDb Tutorial- Updating Data from the Mongo Database
In the last few videos, we have seen how to search and delete data from Mongo databases. Moving on further, here we will see how to update any data in the Mongo database.

As usual, we will open two powershell windows and write Mongod in one and Mongo in another and run both the codes. It helps to build the connection between your files and Mongo database. The database needs to perform these minimum operations to compete in the market- CRUD (create, read, update, delete). Although we can perform many other operations like searching but the above listed four are the most important ones.

In this tutorial, we will focus on updating the file. Start by making a new file as tut84.js and write the basic code as follows-

show dbs 
use harryKart
show collections
The show collection command will give us all the collections which are known as tables in the relational database system. To make a new collection, we can write as db.anotherCollection.insertData({a: 89}).

To view all the items, we have to write

 db.items.find()
We get the output as follows-



From the above picture, suppose we want to update the price of “Moto 30s” from 29000 to 2. For doing this, we can write as follows-

db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})

The updateOne() function is used to update only 1 item. After writing the above code, we get the output as follows-



Now in the example, we are having three “Moto 30s”. We have to change the rating of all the three mobiles to 1. To do this, we can write as follows-

db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})
The updateMany() function is used to update multiple items. Hence after writing the above code, we get the output as follows-



So here, after learning how to update the items, we have completed all the CRUD tasks. You must be thinking that why we have switched from designing the website to MongoDb. Well, it is necessary to learn to store your data in the backend.

We will further use this concept of MongoDb in Node.Js to work upon our backends. So I hope you must have understood till now, the concept of MongoDb. So stay with the tutorials to learn more.