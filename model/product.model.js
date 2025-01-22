import { Schema,model } from "mongoose";

//productSchema
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description:String
})

//productModel
const Product=model('product',productSchema)

export {Product}