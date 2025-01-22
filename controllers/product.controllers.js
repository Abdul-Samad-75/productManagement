import { Product } from "../model/product.model.js";

//getAllProducts
const getAllProduct = async (req, res) => {

    try {
        const products = await Product.find()
        if (!products) return res.status(404).json('Products not found')
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ error: error.message })

    }

}

//createProducts
const createProduct=async (req,res) => {

    try {
        const { name, price, description } = req.body
        
        if (!name || !price) return res.json('Please enter name and price')
        
        const product = await Product.create({ name, price, description })

        res.status(201).json({msg:"Product created successfully",Product:product})     
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

    
}


//deleteProduct
const deleteProduct=async (req,res) => {

    try {
        const { id } = req.params
        
        const product=await Product.findByIdAndDelete(id)

        if (!product) return res.status(404).json({ msg: `Product with ${id} not found` })
        
        res.status(200).json({msg:"Product Deleted Successfully",Product:product})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    
}

export {getAllProduct,createProduct,deleteProduct}