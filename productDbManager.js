var sql =require('mssql');

exports.getProducts=getProducts;
exports.updateProduct=updateProduct;
exports.insertProduct=insertProduct;
exports.deleteProduct=deleteProduct;

var dbconfig = {
    server: "server",
    port:"port",
    database:"database",
    user:"username",
    password:"password"
};

function getProducts(id)
{
    return new Promise ((resolve, reject) =>{

        var conn = new sql.ConnectionPool(dbconfig);
        var req = new sql.Request(conn);
         
        conn.connect(function(error){
             
            if(error){
                console.log(error);
                return;
            }
             
            req.query("SELECT * FROM Products",function(err, redocrset){
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
    var conn = new sql.ConnectionPool(dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("UPDATE Products SET ProductName='"+product.ProductName+"' WHERE ProductId="+product.Id,function(err, redocrset){
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
    var conn = new sql.ConnectionPool(dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("INSERT INTO Products(ProductName) VALUES ('"+product.ProductName+"') ",function(err, redocrset){
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
    var conn = new sql.ConnectionPool(dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("DELETE FROM Products WHERE ProductId ="+product.Id,function(err, redocrset){
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

