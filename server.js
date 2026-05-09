const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const itemRoutes = require('./backend/routes/itemRoutes')
app.use('/api/items', itemRoutes)

app.get("/api/test", (req, res)=>{
    res.json({
        message: "Hello from backend..."
    })
})

const PORT = 5000
app.listen(PORT, function(){
    console.log('Server running on port: ',PORT)
})