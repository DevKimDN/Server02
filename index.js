//dotenv
//require('dotenv').config();

const express = require ('express')
//const cors = require('cors');

const app = express();

//app.use(cors());
//pp.use(express.json()); //Body parser



const port = 9000;


app.get("/",(req,res,next) =>{
res.status(200).json({
    status: 'success',
    data: {
        num: 9999
    }
})   
})

app.listen(port, ()=> {
    console.log(`server is running !!! on port ${port}`)
})