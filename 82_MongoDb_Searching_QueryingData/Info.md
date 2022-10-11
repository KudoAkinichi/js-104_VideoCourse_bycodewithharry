https://www.codewithharry.com/videos/web-development-in-hindi-82/


MongoDb Tutorial: Searching/Querying data from the Mongo Database | Web Development Tutorials #82
Mongo DB Tutorial- Searching or Querying Data From the Mongo database
In the last tutorial, we have discussed how to insert data in the Mongo database and how to persist those data. To start the Mongo process, we will write Mongod in the powershell window. We will then open another powershell window and write Mongo to get Mongo Shell. By doing this, we will connect the Mongo Shell with the Mongod process.

To view all the database, we will write as show dbs and we will get the output as follows-



To switch into a new database, we will write as use harrycart and to get the list of our collections, we have to write as show collections. 


To query our database, we can write as 

db.items.find({rating: 3.5})
The above code will give the list of those items having the rating as 3.5 as follows-



Now we will make a new file as tut82.js and understand how we can use search query to search the items. We can write as follows-

// Searching for data in mongo db
use harryKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})

This function will return all those items that match the condition. However, we can also use some complex functions like greater than or less than to meet our query as follows-

db.items.find({rating: {$gt: 3.5}})
The above code will give the list of all those items having rating greater than 3.5 as follows-




We can also use and operator to meet our query. The example is as follows-

db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})
This code will give the list of all those items having ratings greater than 3.5 and having prices more than 4000.

If we write as-

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})
We will get the output as the list of those items whose ratings are less than 3.5 and price more than 114000.

Till now you must have noticed that in the case of And operator, we have not used any symbol. But it is not the same in the case of Or. While using OR operator, we will use a dollar ‘$’ symbol as follows-

db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 

})
It will give the list of all those items having rating less than 3.5 or price more than 114000 as follows-



So I hope you must have understood the basic concept of how to search a query using different operators. We will keep it basic and simple until you command yourself well. Till then keep practicing and stay tuned with the tutorials. 