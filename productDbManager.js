var sql =require('mssql');
var globalSettings=require('./globalSettings');

exports.getProducts=getProducts;
exports.updateProduct=updateProduct;
exports.insertProduct=insertProduct;
exports.deleteProduct=deleteProduct;


function getProducts(id)
{
    return new Promise ((resolve, reject) =>{

        var conn = new sql.ConnectionPool(globalSettings.dbconfig);
        var req = new sql.Request(conn);
         
        conn.connect(function(error){
             
            if(error){
                console.log(error);
                return;
            }
             
            req.query("SELECT * FROM Product",function(err, redocrset){
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

function updateProduct(product)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("UPDATE Product SET ProductName='"+product.ProductName+"' WHERE ProductId="+product.Id,function(err, redocrset){
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

function insertProduct(product)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("INSERT INTO Product(ProductName) VALUES ('"+product.ProductName+"') ",function(err, redocrset){
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


function deleteProduct(id)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("DELETE FROM Product WHERE ProductId ="+id,function(err, redocrset){
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

