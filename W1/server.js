const { resolve } = require("path");
const data = require("./modules/productData");
const express = require("express");
const { rejects } = require("assert");
const app = express();

const HTTP_PORT = process.env.PORT || 8080 ;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send({message:"Hello World"});
});

app.get("/api/products",async(req,res)=>{
    let products = await data.getAllProducts();
    res.send(products);
});

app.get("/api/products/:id",async(req,res)=>{
    try{
        let product = await data.getProductById(req.params.id);
        res.send(product);
    }catch(err){
        res.status(404).send({message: err});
    }
});

app.post("/api/products",async(req,res)=>{
    await data.addProduct(req.body);
    res.send({message:"Added Product"});
});

app.put("/api/products/:id",async(req,res)=>{
    try {
        await data.updateProductById(req.params.id, req.body);
        res.send({message:"Product Updated"});
    } catch (err) {
        res.status(404).send({message: err});
    }
});

app.delete("/api/products:id", async(resolve,rejects)=>{
    try {
        await data.deleteProductById(req.params.id);
        res.send({message:"Product Deleted"});
    } catch (err) {
        res.status(404).send({message: err});
    }
});

// Call initialize before starting the server
data.initialize().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`App listening on port ${HTTP_PORT}`);
    });
}).catch(err => {
    console.error("Failed to initialize product data:", err);
});