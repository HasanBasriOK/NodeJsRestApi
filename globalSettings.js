const log4js = require('log4js');
const logger = log4js.getLogger("sampleRestApi");

log4js.configure({
    appenders: { sampleRestApi: { type: "file", filename: "logpath\\sampleRestApi.log" } },
    categories: { default: { appenders: ["sampleRestApi"], level: "all" } }
});


exports.dbconfig=dbconfig;
exports.logger=logger;

var dbconfig = {
    server: "server",
    port:"port",
    database:"database",
    user:"username",
    password:"password"
};