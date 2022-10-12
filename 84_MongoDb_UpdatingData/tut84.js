// Show dbs
// use Kudokart
// show collections
// Useful in terminal use arrow key to show history of commands.

// Add collection
db.anotherCollection.insertOne({a:9969})

// Update Data
db.items.updateOne({name: 'Moto 30s'}, {$set: {price: 10000}})
db.items.find()
db.items.updateMany({name: 'Moto 30s'}, {$set: {price: 12000, rating: 2.1}})