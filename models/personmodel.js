// const mongoose = require('mongoose');


// const personSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     favoriteFoods:[String]
// })

// module.exports=mongoose.model("Person",personSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Person
const personSchema = new Schema({
  name:  String,
  age: Number,
  favoriteFoods:[String]
  
});

// Create and export the Person model based on the schema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;