import mongoose from "mongoose";

const notasSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
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