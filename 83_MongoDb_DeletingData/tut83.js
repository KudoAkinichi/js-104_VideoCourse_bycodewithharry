// show dbs
// use Kudokart
// show collections

db.items.find({price: 22000})

// Deleting items from the MongoDb database:
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})