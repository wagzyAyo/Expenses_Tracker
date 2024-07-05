const express = require('express')
const authRouter = require('./Routes/auth')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const dataRouter = require('./Routes/data');
const budgetRouter = require('./Routes/budget')

const port = process.env.PORT || 5000
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//Routes
app.use('/api', authRouter)
app.use('/api/data', dataRouter)
app.use('/api/budget', budgetRouter)

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