const mongoose = require('mongoose');
// require('dotenv').config();

const connectdb = async()=>{
await mongoose.connect('mongodb+srv://bouthainasd562:lm8J2UCyEoa8Bu21@cluster0.9fa7tq1.mongodb.net/mongoose')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:');
  });
}

module.exports = connectdb