const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0-lh3ow.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, dbName: "nstore"}).then(()=>{
    console.log("Connected sucessfully...");
}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;	