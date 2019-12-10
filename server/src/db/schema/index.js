import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String, 
    mobile:String,
    email:String,
    password:String, 
    created_by:Number,
    created_at:Date,
    updated_at:Date
    
})
const subuserSchema = new Schema({
    name:String, 
    mobile:String,
    email:String,
    password:String, 
    created_by:String,
    created_at:Date,
    updated_at:Date
})

let User = mongoose.model('User', userSchema);
let Subuser = mongoose.model('Subuser', subuserSchema);

export {User,Subuser} 