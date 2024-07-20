import mongoose from "mongoose";
import app from "./app.js";
import 'dotenv/config'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
}

connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log(err);
});