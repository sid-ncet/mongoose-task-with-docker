const express=require('express')
var cors = require('cors');
require('./config')
const product=require('./product')
const app=express();
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('this is new')
})
app.post('/create',async(req,res)=>{
    let data=new product(req.body)
    console.log(data)
    let result=await data.save()
    console.log(result)
    res.send(result)
})
app.get('/list',async(req,res)=>{
    let data=await product.find();
    res.send(data)
})
app.delete('/delete/:_id',async(req,res)=>{
    let data=await product.deleteOne(req.params)
    console.log(data);
    res.send(data)
})
app.put('/update/:_id',async(req,res)=>{
    let data=await product.updateOne(
        (req.params),{$set:req.body}
    )
    res.send(data)
})
app.listen(7000,()=>{
    console.log('successfully connected')
})