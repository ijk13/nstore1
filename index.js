const express = require("express"); 
const bodyPars = require("body-parser"); // to parse post request body
const cors = require("cors"); // accept cross client request
let schema = require("./schema"); // 
let {nstore} = schema;
const app = express();
// using middle ware for parse and cross request
app.use(bodyPars());
// only allowing cros fom my site
app.use( cors({
    }));
app.post("/pfb",(req,res)=>{
    const body = req.body;  // copying request body
    let val = new nstore({      // fitting request to menu schema
        brand:body.brand
    });
    nstore.find({"brand":val.brand},{"product":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.get("/bl",(req,res)=>{
    nstore.find({},{"brand":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.get("/pl",(req,res)=>{
    nstore.find({},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.post("/np",(req,res)=>{
    const body = req.body;
     nstore.findOne({brand:body.brand},(err,example)=>{
        if(example)
        {
            example.product.push(body.product);
            example.save().then(doc=>{   // saving new item to  mongoose
            res.write("sucess");
            res.end();
            });
        }
        else
        {
            let ar=[];
            ar.push(body.product)
            let val = new nstore({      // fitting request to menu schema
            brand:body.brand,
            product:ar
            });
            val.save().then(doc=>{   // saving new item to  mongoose
            res.write("sucess");
            res.end();
            }) 
        }
    })  // copyi
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("server started lisening in port 3000.....");
})
