//dotenv
require('dotenv').config();

const express = require ('express')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //Body parser



const port = process.env.APP_PORT;


app.get("/",(req,res,next) =>{
res.status(200).json({
    status: 'success',
    data: {
        num: 10
    }
})   
})

app.listen(port, ()=> {
    console.log(`server is running !!! on port ${port}`)
})