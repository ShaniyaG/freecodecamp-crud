const express = require('express');
const router = express.Router();
const { getProducts,getOneProduct,createproduct,updateProduct,deleteProduct } = require('../controllers/productController.js')

router.get('/',getProducts);
router.get('/:id',getOneProduct);

router.post('/',createproduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct)


module.exports = router;