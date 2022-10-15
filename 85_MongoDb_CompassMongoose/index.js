// npm install mongoose
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log("We are connected bro or not lol..")
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name
  console.log(greeting);
};

const Kitten = mongoose.model('kudoKitten', kittySchema);

const kudoKitty = new Kitten({ name: 'kudoKitty pro' });
const Alanwake = new Kitten({ name: 'Gamer 1' });
// console.log(kudoKitty.name); 

kudoKitty.save();
kudoKitty.speak();

Alanwake.save();
Alanwake.speak();







