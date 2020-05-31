const globalSettings=require('./globalSettings');
const userDbManager=require('./userDbManager');

exports.getUser=getUser;
exports.postUser=postUser;
exports.deleteUser=deleteUser;

function getUser(req,res)
{
    globalSettings.logger.info("getUser called");
    var id = req.query.id;
    try {

        productManager.getProducts(id).then(result => {
            res.send(result);
        });

    } catch (error) {
        globalSettings.error("getUser error :" + error);
    }

    globalSettings.info("getUser completed");
}

function postUser(req,res)
{
    globalSettings.info("postUser called");
    var product = {};

    try {

        product = req.body;

        if (product.id != undefined)
            productManager.updateProduct(product);
        else
            productManager.insertProduct(product);

    } catch (error) {
        globalSettings.error("postUser error :" + error);
    }

    globalSettings.info("postUser completed");
}

function deleteUser(req,res)
{
    globalSettings.info("deleteUser called");

    try {

        var id = req.body.id;

        if (id != undefined)
            productManager.deleteProduct(id);

    } catch (error) {
        globalSettings.error("deleteUser error :" + error);
    }

    globalSettings.info("deleteUser completed");
}