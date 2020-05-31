const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//services
const productService=require('./product');
const customerService = require('./customer');
const userService=require('./user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', defaultStartLink);


//Product Endpoints
app.get('/product', productService.getProduct);
app.post('/product', productService.postProduct);
app.delete('/product', productService.deleteProduct);

//Customer Endpoints
app.get('/customer',customerService.getCustomer);
app.post('/customer',customerService.postCustomer);
app.delete('/customer',customerService.deleteCustomer);

//User Endpoints
app.get('/user',userService.getUser);
app.post('/user',userService.postUser);
app.delete('/user',userService.deleteUser);


function defaultStartLink(req, res) {
    res.send("application is running");
}

