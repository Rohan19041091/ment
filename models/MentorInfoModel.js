import mongoose from "mongoose";

const mentorInfoSchema= new mongoose.Schema({
    mentorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor" 
    },
    startTime: {
        type: mongoose.Decimal128,
        required: true,
      },
    endTime: {
        type: mongoose.Decimal128,
        required: true,
      },
    dispcription:String,
    experience:Number

})
const MentorInfo=new mongoose.model("user",mentorInfoSchema)
export default MentorInfo