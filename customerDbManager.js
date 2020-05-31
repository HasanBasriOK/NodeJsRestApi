var sql =require('mssql');
var globalSettings=require('./globalSettings');

exports.getCustomers=getCustomers;
exports.updateCustomer=updateCustomer;
exports.insertCustomer=insertCustomer;
exports.deleteCustomer=deleteCustomer;

function getCustomers(id)
{
    return new Promise ((resolve, reject) =>{

        var conn = new sql.ConnectionPool(globalSettings.dbconfig);
        var req = new sql.Request(conn);
         
        conn.connect(function(error){
             
            if(error){
                console.log(error);
                return;
            }
             
            req.query("SELECT * FROM Customer",function(err, redocrset){
                if(err)
                {
                    console.log(err);  
                }
                else{
    
                    for(var i=0; i<redocrset.recordset.length; i++)
                    {
                        console.log(i);
                    }
    
                    var results=redocrset.recordset;
                    return resolve(results);
                }
            })
        })
    });
}

function updateCustomer(customer)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("UPDATE Customer SET CustomerName='"+customer.CustomerName+"' WHERE CustomerId="+customer.Id,function(err, redocrset){
            if(err)
            {
                console.log(err);
            }
            else{

                var results=redocrset.recordset;
                return resolve(results);
            }
        })
    });
}

function insertCustomer(customer)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("INSERT INTO Customer(CustomerName) VALUES ('"+customer.CustomerName+"') ",function(err, redocrset){
            if(err)
            {
                 console.log(err);
            }
            else{

                var results=redocrset.recordset;
                return resolve(results);
            }
        })
    });
}

function deleteCustomer(id)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("DELETE FROM Customer WHERE CustomerId ="+id,function(err, redocrset){
            if(err)
            {
                 console.log(err);
            }
            else{

                var results=redocrset.recordset;
                return resolve(results);
            }
        })
    });
}

