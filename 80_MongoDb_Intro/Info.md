https://www.codewithharry.com/videos/web-development-in-hindi-80/


MongoDb Tutorial: Introduction to MongoDb + Installation | Web Development Tutorials #80
MongoDb Tutorial- Introduction to MongoDb + Installation
In this tutorial, we are going to learn about MongoDb and how to use and install it. It is a very easy to use database. Let us first understand what MongoDb is.

What is MongoDb?

If you belong to the software industry field, then you must have heard about MongoDb. It is a bit faster than the other traditional databases like RDBMS or MySQL. Some of its main highlights are-

No SQL Database
Document oriented
Open source, cross platform, document oriented database written in C++
Develop Faster
Deploy Easier
Scale Bigger
MongoDb development started in 2007
MongoDb 2.4.9 was the latest and stable version- released on January 10, 2014.
What is meant by a Document Oriented Database?

Simply, a document oriented database means which stores its data in the form of documents.

MongoDb stores data as documents, so it is known as a document oriented database.
Data is stored in the form of BSON. BSON is almost similar to JSON with the only difference that types of variables are declared in it.
If you are coming from the DBMS background, then following changes are there-
Database is referred to as a database.
Table is referred to as a collection.
Row is referred to as documents

Mongo and Mongod

By default while installing MongoDb, it gets started on port 27017.

Mongod is the host process for the database.
Mongo is the command line shell that connects to a specific instance of mongod. 
When you run mongo with no parameters it defaults to connecting to the local host on port 27017.
If you run mongo against an invalid host_machine: port combination then it will fail to connect.
To make it simpler, Mongod is like a plate and mongo is like a spoon. You need to put a spoon in a plate to eat the food. In the same way, mongo is needed to run the database for mongodb.

You can begin to download MongoDb from here.

Now you have to go to C: drive > program files > MongoDb > Server > 4.2 > bin, and then copy the path of the bin folder and update it in the environment variables as shown here-



 Now open the Windows Powershell admin and write mongo. You will get the output as follows-



 


Now open another window of powershell and write mongo in it. Then on the other scene you will get the message as follows-



It means a connection is established.

So I hope you must have got an idea of how to use mongo. In the upcoming videos, you will see some more of its uses. Till then stay with the tutorials.