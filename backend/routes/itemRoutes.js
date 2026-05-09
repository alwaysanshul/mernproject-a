const express = require('express')
const router = express.Router()

const Item = require("../models/Item")

router.get("/", async(req, res) => {
    const items_total = await Item.find()
    res.json(items_total)
})

router.post('/', async (req, res) => {
    const new_item = new Item(req.body)
    const saved_item = await new_item.save()
    res.json(saved_item)
});

router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id)
    res.json({msg: "Item Deleted!"})
});


module.exports = router