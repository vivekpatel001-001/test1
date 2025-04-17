import mongoose from "mongoose";
 mongoose.connect("mongodb+srv://vivek:qeBMwUAFVDTtyFzo@cluster0.cc9ff.mongodb.net/Ecom-node?retryWrites=true&w=majority&appName=Cluster0");
export default mongoose.set("strictQuery",false);