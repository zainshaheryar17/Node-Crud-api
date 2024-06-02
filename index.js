const mongoose = require('mongoose');
const express= require('express');
const app= express();
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Form method url encoded

//routes
app.use('/api/products',productRoute)


app.get('/', (req, res) =>{
    res.send('Hello from NODE API Server');
});

mongoose.connect("mongodb+srv://zainshaheryar:jQup5dH01rxW5EBg@backenddb.terwkto.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB").then(()=>
{
console.log("Connected to MongoDB");
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

})
.catch(()=>{
    console.log("Connection Failed");
})