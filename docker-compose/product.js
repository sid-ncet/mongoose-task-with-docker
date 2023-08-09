const mongoose=require('mongoose')
const productSchemas=new mongoose.Schema({
    name:String,
    age:Number,
    mobile:Number
})
module.exports=mongoose.model('productList',productSchemas)