require('dotenv').config();
const mongoose = require('mongoose');



const connectDB = async ()=>{
    
try {    
    const conn = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
})
console.log("conneted to mongodb !!!");
} catch (error) {
    console.log(error);
    process.exit(1);
}

}

module.exports = {connectDB};