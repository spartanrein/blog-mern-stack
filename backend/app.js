require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI;
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const port = process.env.PORT
const db = mongoose.connect(uri)
.then(result => {
    app.listen(port)
    console.log(`listening on port: ${port}`)
})
.catch(err => console.log(err));
app.use(cors())
app.use(morgan('tiny'))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use(express.json())
app.use('/blogs/',blogRoutes)
app.use('/user/', userRoutes)
process.on('exit', () => {
    db.disconnect()
})