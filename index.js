const express = require('express');
const app = express();
const port = 8000;
// const route = require('./routes/index.js')

app.use('/', require('./routes/index.js'));


app.listen(port,function(err){

    

        if(err){

        
           console.log(`err ${err}`);
        }

        console.log(`server is running on ${port}`);
   


});
