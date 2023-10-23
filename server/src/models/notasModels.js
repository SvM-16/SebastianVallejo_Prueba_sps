import mongoose from "mongoose";

const notasSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: true,
        trim: true
    },
    titulo : {
        type: String,
        required: true
    },
    informacion : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

export default mongoose.model('Notas', notasSchema )