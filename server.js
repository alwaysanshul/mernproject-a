const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())

app.get("/api/test", (req, res)=>{
    res.json({
        message: "Hello from backend..."
    })
})

const PORT = 5000
app.listen(PORT, function(){
    console.log('Server running on port: ',PORT)
})