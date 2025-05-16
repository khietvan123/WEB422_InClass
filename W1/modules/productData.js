const { rejects } = require("assert");
const { resolve } = require("path");

let products = [];

function initialize(){

    return new Promise((resolve, rejects)=>{
        products =[
            {id:1, name: "Pencil", cost:1.99},
            {id:2, name: "Pen", cost:2.45},
            {id:3, name: "Eraser", cost:0.45},
            {id:4, name: "Paper", cost:10.25},
            idCounter = 4
        ]
        resolve();
    });
}

function getAllProducts(){

    return new Promise((resolve,rejects)=>{
        resolve(products);
    });
}

function getProductById(id){

    return new Promise((resolve,rejects)=>{
        let idx = products.findIndex((element)=>element.id==id);
        
        if(idx == -1){
            rejects('Unable to find products');
        }
        else
        {
            resolve(products[idx]);
        }
    });
}

function addProduct(data){
    return new Promise((resolve,rejects)=>{
        idCounter++;
        products.push({id: idCounter, name: data.name, cost: data.cost});
        resolve();
    });
}

function updateProductById(id, data){
    return new Promise((resolve,rejects)=>{
        let idx = products.findIndex((element)=>element.id==id);
        
        if(idx == -1){
            rejects('Unable to find products');
        }
        else
        {
            products[idx] = {id:id, name:data.name, cost: data.cost};
            resolve();
        }
    });
}

function deleteProductById(id){
    return new Promise((resolve,rejects)=>{
        let idx = products.findIndex((element)=>element.id==id);
        
        if(idx == -1){
            rejects('Unable to find products');
        }
        else
        {
            products.splice(idx,1);
            resolve();
        }
    });
}

module.exports = {initialize, getAllProducts, getProductById, addProduct, updateProductById, deleteProductById};