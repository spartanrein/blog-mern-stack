const Blog = require('../models/blogModel')

//get all blogposts
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.send(result)
    })
}

//add blogpost
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .catch((err) => {
        console.log(err)
    }).then((savedDoc) => {
        res.send(savedDoc)
    })
}
 
//delete blogpost by id
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {res.send(result)})
        .catch((err) => {
            console.log(err)
        })
}

//edit blogpost by id

module.exports={ blog_index, blog_create_post, blog_delete}