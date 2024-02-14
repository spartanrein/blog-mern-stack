const Blog = require('../models/blogModel')

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            console.log(result)  
    })
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .catch((err) => {
        console.log(err)
    }).then((savedDoc) => {
        res.send(savedDoc)
    })
}
        

module.exports={ blog_index, blog_create_post }