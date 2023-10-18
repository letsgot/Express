// import express
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const workoutRoutes = require('./routes/workout.js');


// make a app variable by calling express
const app = express();

// middleware 
// middleware runs after the req is send and before the response is sent
// app.use((req,res,next)=>{
//     console.log(req.method);
//     next();
// })

app.use(express.json())

// router => get route on 4000 port
app.get('/',(req,res)=>{
    res.json({
        message : "Hello Port 4000"
    })
})


// recommended way to doing routes
app.use('/api/workouts',workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // app listen on which port
    app.listen(process.env.PORT,()=>{
        console.log("App listening connect db on port ", process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log('error  ' + error.message);
  })

