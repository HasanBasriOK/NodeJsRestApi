var sql =require('mssql');
var globalSettings=require('./globalSettings');

exports.getUsers=getUsers;
exports.updateUser=updateUser;
exports.insertUser=insertUser;
exports.deleteUser=deleteUser;

function getUsers(id)
{
    return new Promise ((resolve, reject) =>{

        var conn = new sql.ConnectionPool(globalSettings.dbconfig);
        var req = new sql.Request(conn);
         
        conn.connect(function(error){
             
            if(error){
                console.log(error);
                return;
            }
             
            req.query("SELECT * FROM User",function(err, redocrset){
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

function updateUser(user)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("UPDATE User SET Username='"+user.Username+"' WHERE UserId="+user.Id,function(err, redocrset){
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

function insertUser(user)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("INSERT INTO User(Username) VALUES ('"+user.Username+"') ",function(err, redocrset){
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

function deleteUser(id)
{
    var conn = new sql.ConnectionPool(globalSettings.dbconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
            console.log(error);
            return;
        }
         
        req.query("DELETE FROM User WHERE UserId ="+id,function(err, redocrset){
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

