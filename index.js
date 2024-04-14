const express =  require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes.js');
const dotenv =  require('dotenv').config();

const port = 3000
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/api/products',productRoute);

// Database connection
mongoose.connect(process.env.mongo_uri)
.then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`App running successfully at ${port}`)
    })
}).catch((err)=>{
    console.log(err,'Database not connected');
})

