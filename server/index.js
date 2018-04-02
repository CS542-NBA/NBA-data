const express=require('express');
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');
var qs=require('querystring');
/*
const app=express();
app.get('/sendquery',(req,res)=>{

// Get a non-pooled connection

  oracledb.getConnection(
    {
      user          : dbConfig.user,
      password      : dbConfig.password,
      connectString : dbConfig.connectString
    },
    function(err, connection)
    {
      if (err) {  

        console.error(err.message);
        return;
      } 

      
      connection.execute( 
          
        `SELECT *
         FROM CLASSES`,
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          } 
          

          res.end(result); 

          //res.send(result.rows);
          //console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
          //console.log(result.rows);     // [ [ 180, 'Construction' ] ]
          doRelease(connection);
        });
        
    }); 

  // Note: connections should always be released when not needed
  function doRelease(connection)
  {
    connection.close(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
	
});
app.listen(5000);
*/

var http=require('http');
http.createServer(function(request,response){
  var body='';
  request.on('data',function(data){
    console.log(data)
    body+=data;
  });
  request.on('end',function(){
    var post=qs.parse(body);
    console.log(post);
  });
  
  response.writeHead(200,{
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  
  oracledb.getConnection(
    {
      user          : dbConfig.user,
      password      : dbConfig.password,
      connectString : dbConfig.connectString
    },
    function(err, connection)
    {
      if (err) {  

        console.error(err.message);
        return;
      } 

      
      connection.execute( 

         body,
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          } 
          //myresult=result;
          //response.write(result);
          response.end(JSON.stringify(result));
          console.log(result);
          //res.send(result.rows);
          //console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
          //console.log(result.rows);     // [ [ 180, 'Construction' ] ]
          doRelease(connection);
        });
        
    }); 

  // Note: connections should always be released when not needed
  function doRelease(connection)
  {
    connection.close(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
  //response.end('myresult');
}).listen(5000);

