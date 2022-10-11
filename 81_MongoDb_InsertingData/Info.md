MongoDb Tutorial: Inserting data into the Mongo Database | Web Development Tutorials #81
MongoDb Tutorial- Inserting data into the Mongo Database
In the last tutorial, we discussed what MongoDb is and saw the difference between mongo and mongod. The objects and commands used in MongoDb are similar to that of JavaScript.

We will open two powershell windows. In the first, we will write mongod and in the second we will write mongo and then run both the files as shown below-




Then we will make a new file as tut81.js. Let us now see how we can insert data in the MongoDb database. We will write as follows-

use harryKart
harrryKart here is a fictional ecommerce website made by us for an example. Moving further let us make a collection as shown below-

db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})
When we copy the above code in the powershell and run it, we get the output as follows-



In the above code, we have made a document collection whose name is Samsung 30s, price is 22000, rating is 4.5, and so on. However, we can include many documents inside it.

Now we will see how we can insert multiple documents. For this, we will use the function known as insertMany. We can insert different arrays in this separated with comma.

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])
To see the whole list of documents written by us, we can write- db.items.find(). The data stored in the data directory will never get deleted until you do it manually. The process takes up the commands one by one and stores it in the data.

If we paste the objects created by us in the powershell and run the command db.items.find(), we get the output as follows-




Both the objects that we have created are stored in the database with different id’s irrespective of having the same. The data persist like this in our MongoDb database. We have different ids for all the objects as we can see here-



The primary key here is ObjectId. MongoDb does not let any kind of schema enforcement on your data.

So I hope you have got an idea how to insert both single and multiple data in your MongoDb database. In the upcoming tutorials, we will see more features and aspects of MongoDb. Till then keep practicing and learn what is taught till now.