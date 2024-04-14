const express =  require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.model');
const productRoute = require('./routes/productRoutes.js')

const port = 3000
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/api/products',productRoute);

// // Get all products
// app.get('/api/products',async (req,res)=>{


// })

// // Update product

// app.put('/api/products/:id',async(req,res)=>{
//  try{   
//     const { id } =req.params;
//     const product =  await Product.findByIdAndUpdate(id,req.body);
//     if(!product){
//        return  res.status(404).json({message:'Product not found'});
//     }
//     const updatedproduct = await Product.findById(id);
//     res.status(200).json(updatedproduct);
// }
// catch(error){
//     res.status(500).json({message:error.message})
// }

// })
// // get one product
// app.get('/api/products/:id',async(req,res)=>{
//   try { 
//     const  { id } = req.params;
//     const product =  await Product.findById(id);
//     res.status(200).json(product);
// }
// catch(error){
//     res.status(500).json({message:error.message})
// }
// })
// // Create a product
// app.post('/api/products',async(req,res)=>{
// try{
//     const product = await Product.create(req.body);
//     res.status(200).json(product);

// }catch(error){
//      res.status(500).json({message:error.message})   
// }
// })

// // delete Product 


// app.delete('/api/products/:id', async(req,res)=>{
//  try {
//     const {id} = req.params;
//     const product =  await Product.findByIdAndDelete(id);

//     if(!product){
//         res.status(404).json({message:'Product not found'});
//     }
//     res.status(200).json({message:"product deleted successfully"})
//  } 
//  catch(error){
//     res.status(500).json({message:error,message});
//  }

// })

// Database connection
mongoose.connect("mongodb+srv://shaniya:admin@shanicluster0.xn6kx.mongodb.net/")
.then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`App running successfully at ${port}`)
    })
}).catch((err)=>{
    console.log(err,'Database not connected');
})

