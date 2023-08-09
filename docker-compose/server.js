const express=require('express')
require('./config')
const product=require('./product')
const app=express();
app.use(express.json())
app.post('/user',async(req,res)=>{
    let data=new product(req.body);
    let result=await data.save()
    console.log(result)
    res.send(result)
})
app.get ('/user',async(req,res)=>{
    let data=await product.find();
    res.send(data)
})

app.listen(3000,()=>{
    console.log('data save succesfully')
})