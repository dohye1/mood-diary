import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    bg:{
        type:String
    },
    selfPromise:{
        type:String,
        default:''
    },
    diarys:[{
        type:mongoose.Schema.Types.ObjectId
    }],
    token:String
})

const model = mongoose.model('User', userSchema );

export default model;