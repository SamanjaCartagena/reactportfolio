const express = require('express');
const http= require('http');
const cors= require('cors');
const port=4000;
const app = express();
app.use(cors());
const server= http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  
server.listen(port, function(error){
  if(error){
      console.log('Something went wrong', error)
  }
  else{
      console.log('Server is listening on port '+port);
  }

})
})