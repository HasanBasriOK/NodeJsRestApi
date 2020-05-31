const globalSettings = require('./globalSettings');
const customerDbManager = require('./customerDbManager');


exports.getCustomer = getCustomer;
exports.postCustomer = postCustomer;
exports.deleteCustomer = deleteCustomer;

function getCustomer(req, res) {
    globalSettings.logger.info("getCustomer called");
    var id = req.query.id;
    try {

        customerDbManager.getCustomers(id).then(result => {
            res.send(result);
        });

    } catch (error) {
        globalSettings.logger.error("getCustomer error :" + error);
    }

    globalSettings.logger.info("getCustomer completed");
}

function postCustomer(req, res) {
    globalSettings.logger.info("postCustomer called");
    var customer = {};

    try {

        customer = req.body;

        if (customer.id != undefined)
            customerDbManager.updateCustomer(customer);
        else
            customerDbManager.insertCustomer(customer);

    } catch (error) {
        globalSettings.logger.error("postCustomer error :" + error);
    }

    globalSettings.logger.info("postCustomer completed");
}

function deleteCustomer(req, res) {
    globalSettings.logger.info("deleteCustomer called");

    try {

        var id = req.body.id;

        if (id != undefined)
            customerDbManager.deleteCustomer(id);

    } catch (error) {
        globalSettings.logger.error("deleteCustomer error :" + error);
    }

    globalSettings.logger.info("deleteCustomer completed");
}