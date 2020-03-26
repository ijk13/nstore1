  
let mongoose  = require("./config");
mongoose = mongoose.mongoose
const nstoreSchema = new mongoose.Schema({brand: String, product:Array});
const nstore = mongoose.model('lcs', nstoreSchema);
module.exports.nstore = nstore;