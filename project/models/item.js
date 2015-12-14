var db = require('../db')
var Item = db.model('Item', {
 model: { type: String, required: true },
 body:  { type: String, required: true },
 price: { type: Number, required: false }
})

module.exports = Item
