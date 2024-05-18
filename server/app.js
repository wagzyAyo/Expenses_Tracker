const express = require('express')
const api = require('./Routes/auth')
const mongoose = require('mongoose')
require('dotenv').config()
const dataRouter = require('./Routes/data')

const port = process.env.PORT || 5000
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', api)
app.use('api/data', dataRouter)

//connect to database
const mongoURI = process.env.MongoURI
mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connected to database")
})
.catch(err =>{
    console.log(`Error connecting to database ${err}`)
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})




app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
} )