import "dotenv/config"
import mongoose from "mongoose";

const {MONGO_URL} = process.env;
export const connect = async() =>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("MongoDB Connected")
    }catch(error){
        console.log("Erro: ", error)
    }
//Connecting to the db
}