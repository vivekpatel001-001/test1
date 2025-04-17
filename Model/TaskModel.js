import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title :{
        type :String,
      required : true,
 },
 description:{
    type:String,
    required:true,
 },
   // status : {
   //    enum : ["pending" , "inprogress" , "completed" ],
   // },
 
 createAt :{
    type : Date ,
    default : Date.now(),

 }
})
export default mongoose.model("newtask" , taskSchema);