const express=require('express');
const app=express();
const productManager=require('./productDbManager');
const log4js=require('log4js');


log4js.configure({
    appenders: { sampleRestApi: { type: "file", filename: "logpath\\sampleRestApi.log" } },
    categories: { default: { appenders: ["sampleRestApi"], level: "all" } }
  });

const logger = log4js.getLogger("sampleRestApi");


app.get('/',defaultStartLink);
app.get('/product',getProduct);
app.post('/product',postProduct);
app.delete('/product',deleteProduct);

function defaultStartLink(req,res)
{
    res.send("application is running");
}

function getProduct(req,res)
{
    logger.info("getProduct called");

    var id=req.query.id;

    try {

        productManager.getProducts(id).then(result => {
            res.send(result);
        });
        
    } catch (error) {
        logger.error("getProduct error :"+error);
    }
   
    logger.info("getProduct completed");
}

function postProduct(req,res)
{
    logger.info("postProduct called");
    var product={};

    try {
        
        product=req.body.product;

        if(product.id1=undefined)
            productManager.updateProduct(product);
        else
            productManager.insertProduct(product);

    } catch (error) {
        logger.error("postProduct error :"+error);
    }
   
    logger.info("postProduct completed");
}

function deleteProduct(req,res)
{
    logger.info("deleteProduct called");

    try {
        
        var id=req.body.id;

        if(id != undefined)
            productManager.deleteProduct(id);

    } catch (error) {
        logger.error("deleteProduct error :"+error);
    }

    logger.info("deleteProduct completed");
}
