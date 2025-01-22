import express from "express";
import { connect } from "mongoose";
import "dotenv/config"
import productRoutes from "./router/product.routes.js";

const app=express()


//middlewares
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send("Hello Mahesh your backend of Product Management is working fine...!")
})

app.use('/api',productRoutes)

const port = process.env.PORT || 8081

//listen
app.listen(port, () => {
    connect(process.env.DB_URL)
    console.log('DB is connected'); 
    console.log(`server is running at http://localhost:${port}`)
    
})