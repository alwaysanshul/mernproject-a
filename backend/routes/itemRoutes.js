const express = require('express')
const router = express.Router()

require("dotenv").config()
const URI = process.env.MONGO_URI

const mongoose = require('mongoose')
mongoose.connect(URI)

const Item = require("../models/Item")

// const itemA = new Item({
//     "email": "joker@gmail.com",
//     "password": "123322341"    
// })

// itemA.save()

router.get("/", async(req, res) => {
    const items_total = await Item.find()
    res.json(items_total)
})

router.post('/', async (req, res) => {
    const new_item = new Item(req.body)
    new_item.save()
    res.json({msg: "new_item saved to db"})
});

module.exports = router