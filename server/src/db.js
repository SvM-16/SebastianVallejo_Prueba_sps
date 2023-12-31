import mongoose from "mongoose"
import dotenv from "dotenv"
(dotenv).config({path:"variables.env"})

export const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_Mongo,{
            useNewUrlparser:true,
            useUnifiedTopology:true
        });
        console.log("Mongo conectado")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}