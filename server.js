const express = require('express');
const connectdb = require('./config/personconfig');
const personRoutes = require('./routes/personRoutes');

const app = express();

require('dotenv').config();


const port = process.env.PORT;

connectdb();
app.use (express.json())
app.use('/api' , personRoutes)


app.listen(port , (err)=>{
    if(err){
        console.error(err)
    }
    console.log('server run with success : ' +  port);
})