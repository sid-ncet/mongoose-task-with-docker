const express=require('express')
require('./config')
const user=require('./user')
const blogpost=require('./blogpost')
const app=express();
app.use(express.json())
app.post('/user',async(req,res)=>{
    let data=new user(req.body);
    let result=await data.save()
    console.log(result)
    res.send(result)
})
app.get ('/user',async(req,res)=>{
    let data=await user.find();
    res.send(data)
})
//it takes three argument ist is title ,body and userid then it create new object id
//copy that id and then when we hit app.get('/blog')then it takes only those id and hit that
//it so its show the combine of two schemas
app.post('/blog',async(req,res)=>{
    let data=new blogpost(req.body);
    let result=await data.save()
    console.log(result)
    res.send(result)
})
app.get('/blog',async(req,res)=>{
    let data=await blogpost.find().populate('userid');
    res.send(data)
})

app.listen(3000,()=>{
    console.log('data save succesfully')
})