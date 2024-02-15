const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    snippet: {type: String, required: true},
},{timestamps:true})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog