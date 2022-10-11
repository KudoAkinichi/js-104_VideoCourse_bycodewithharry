https://www.codewithharry.com/videos/web-development-in-hindi-83/



MongoDb Tutorial: Deleting data from the Mongo Database | Web Development Tutorials #83
MongoDb Tutorial- Deleting Data From the Mongo Database
In this MongoDb tutorial, we will see how we can delete any particular or a set of data from the Mongo database. To start the process, we have to run both Mongod and Mongo in two different powershell windows.

To view all the databases, we will write show dbs and to use the database, we can write use harrykart, to use this database. To view all the items in the database, we can write db.items.find().

To make you understand better, the process of deleting the item from a database is a bit similar to that of searching. It is because the syntax of deleting is almost similar to that of searching. To begin with deleting, we will make a new file as tut83.js and write the code as follows-

show dbs 
use harryKart
show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})


The deleteOne() function will delete the first item among the list of multiple items that matches with the query. Before executing this code, we have three items in the list but after executing the code, we get only two items as shown below-



We can use deleteMany() function to delete multiple items. So if we write the code as follows-

db.items.deleteMany({price: 129000})


We had two items that match with the query, hence we get the output as follows-



So I hope you must have understood how to delete single or multiple data in a database. In the upcoming tutorials, we will see how to deal more with some great MongoDb concepts. Till then stay with the tutorials.