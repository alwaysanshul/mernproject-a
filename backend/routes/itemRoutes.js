const express = require('express')
const router = express.Router()

const Item = require("../models/Item")

const item1 = new Item({
    "email": "priyanka@gmail.com",
    "password": "123322341"    
})
const item2 = new Item({
    "email": "priyanka@gmail.com",
    "password": "123322341"    
})
const item3 = new Item({
    "email": "priyanka@gmail.com",
    "password": "123322341"    
})
const item4 = new Item({
    "email": "priyanka@gmail.com",
    "password": "123322341"    
})
router.get("/", async(req, res) => {
    // const items = await Item.find()
    // res.json([item1,item2,item3,item4])
    
})

router.post('/', async (req, res) => {
//   const newItem = new Item(req.body);
//   const savedItem = await newItem.save();
//   res.json(savedItem);
    
});

module.exports = router