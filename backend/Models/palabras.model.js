import {Schema, model} from "mongoose"

const EsquemaPalabras = new Schema({
    name:String,
    edad:Number
})

export const modeloPalabras = new model("Palabras", EsquemaPalabras)