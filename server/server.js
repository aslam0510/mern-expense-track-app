import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';


const app = express();
const PORT =  process.env.PORT || 4000
//middlewares
app.use(bodyParser.json());
app.use(cors())
// app.use(dotenv.config())


//database connection
const DB_URL = 'mongodb+srv://aslam0510:aslam0510@cluster0.xkgan.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB_URL, {
}).then(() => {
console.log('Databse Connected')
}).catch(err => {
  console.log("Databse did not connect");
})

app.listen(PORT, ()=> console.log(`server is runninon on port ${PORT}`))