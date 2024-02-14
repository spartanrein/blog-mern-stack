const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const password = encodeURIComponent("BcPIYH6kvuN799re")
const uri = `mongodb+srv://test_user:${password}@blog.dysb6v1.mongodb.net/?retryWrites=true&w=majority`;
const blogRoutes = require('./routes/blogRoutes')
const db = mongoose.connect(uri)
.then(result => {
    app.listen(port)
    console.log(`listening on port: ${port}`)
})
.catch(err => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use(express.json())
app.use(blogRoutes)
process.on('exit', () => {
    db.disconnect()
})