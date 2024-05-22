const express =require('express')
const Routes = require('./Routes/index')
const app =express();
const cors = require('cors');
const port =5402
const bodyParser =require("body-parser")
app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); 
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

  app.use('/',Routes);
  


    app.listen(port,()=>{
        console.log(`apps runing on port ${port} `);
    })




