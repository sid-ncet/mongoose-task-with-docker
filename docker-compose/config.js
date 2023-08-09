const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://mongo:27017/mongodb")