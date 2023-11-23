import { Schema, model } from "mongoose";
import { ICetagory } from "./cetagory.interface";

const cetagorySchema =new Schema<ICetagory> ({
    name: {
        type:String,
        required: true,
        unique:true
        
    }
}, {
    timestamps:true
})

export const Cetagory=model <ICetagory>('Cetagory',cetagorySchema)