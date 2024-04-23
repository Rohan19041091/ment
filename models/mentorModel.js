import mongoose from "mongoose";

const mentorSchema= new mongoose.Schema({
    name:String,
    email:{ type: String, unique: true },
    phoneNo:{ type: Number, unique: true },
    password:String,
    slot:Number,
    dispcription:String,
    experience:Number

})
const Mentor=new mongoose.model("user",mentorSchema)
export default Mentor