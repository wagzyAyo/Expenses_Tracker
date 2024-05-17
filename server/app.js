const express = require('express')
const api = require('./Routes/api')
require('dotenv').config()


const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port = process.env.PORT || 5000
app.use('/api', api)

app.get('/', (req, res)=>{
    res.send('Hello World')
})




app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
} )