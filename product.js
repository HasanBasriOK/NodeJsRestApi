const globalSettings=require('./globalSettings');
const productManager = require('./productDbManager');

exports.getProduct=getProduct;
exports.postProduct=postProduct;
exports.deleteProduct=deleteProduct;


function getProduct(req, res) {
    globalSettings.info("getProduct called");
    var id = req.query.id;
    try {

        productManager.getProducts(id).then(result => {
            res.send(result);
        });

    } catch (error) {
        globalSettings.error("getProduct error :" + error);
    }

    globalSettings.info("getProduct completed");
}

function postProduct(req, res) {
    globalSettings.info("postProduct called");
    var product = {};

    try {

        product = req.body;

        if (product.id != undefined)
            productManager.updateProduct(product);
        else
            productManager.insertProduct(product);

    } catch (error) {
        globalSettings.error("postProduct error :" + error);
    }

    globalSettings.info("postProduct completed");
}

function deleteProduct(req, res) {
    globalSettings.info("deleteProduct called");

    try {

        var id = req.body.id;

        if (id != undefined)
            productManager.deleteProduct(id);

    } catch (error) {
        globalSettings.error("deleteProduct error :" + error);
    }

    globalSettings.info("deleteProduct completed");
}
