
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema ({
  name: String,
  ocuppation: String,
  catchPhrase: String
}, { timestamps: true })

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity