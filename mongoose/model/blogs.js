const mongoose =  require("mongoose");

let blogsSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Blogs",blogsSchema);