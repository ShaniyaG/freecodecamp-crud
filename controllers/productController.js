const Product =  require('../models/product.model');

const getProducts =  async(req,res)=>{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message})   
   }
}
// Get One product
const getOneProduct = async(req,res)=>{
    try { 
        const  { id } = req.params;
        const product =  await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

// Create a product

const createproduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    
    }catch(error){
         res.status(500).json({message:error.message})   
    }
}

// Update product

const updateProduct = async(req,res)=>{
    try{   
        const { id } =req.params;
        const product =  await Product.findByIdAndUpdate(id,req.body);
        if(!product){
           return  res.status(404).json({message:'Product not found'});
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

// delete product 

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product =  await Product.findByIdAndDelete(id);
    
        if(!product){
            res.status(404).json({message:'Product not found'});
        }
        res.status(200).json({message:"product deleted successfully"})
     } 
     catch(error){
        res.status(500).json({message:error,message});
     }
}

module.exports = { getProducts,getOneProduct,createproduct,updateProduct,deleteProduct }