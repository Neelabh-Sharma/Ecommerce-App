require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("MONGO_URI=mongodb+srv://neelabhsharma2002:G8VQpksBpdPHl5Yv@cluster0.jgfff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}