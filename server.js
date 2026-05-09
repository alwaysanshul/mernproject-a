const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

require("dotenv").config()
const URI = process.env.MONGO_URI

const mongoose = require('mongoose')
mongoose.connect(URI)

const itemRoutes = require('./backend/routes/itemRoutes')

app.use('/api/items', itemRoutes)

app.get("/api/test", (req, res)=>{
    res.json({
        message: "Hello from backend..."
    })
})

const port = process.env.PORT

app.listen(port, function(){
    console.log('Server running on port: ',port)
})