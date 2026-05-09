const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Item', ItemSchema)


// const itemA = new Item({
//     "email": "joker@gmail.com",
//     "password": "123322341"    
// })

// itemA.save()
