const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const app = express();
const port = 3000;
const dbURI = 'mongodb+srv://mayukhsasmal7:DxeDOvQpeA3Tn4k7@expressblogapp.cnoe92s.mongodb.net/expressBlogApp?retryWrites=true&w=majority';

//mongoose connection
mongoose.connect(dbURI)
    .then((res) => {
        console.log('Connected to MongoDB');
        //server will be only running after the connection is established
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
     })
    .catch((err) => {
        console.log('Could not connect to MongoDB');
        console.log(err);
     });

//setup view engine
app.set('view engine', 'ejs');

//middleware example
app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    next(); // if next() is not called, the request will be left hanging
});

// load static files through middleware
app.use(express.static('public'));

//homepage route
app.get('/', (req, res) => {
    Blog.find({})
        .sort({createdAt: -1})
        .limit(5)
        .then((blogs) => {
            res.render('index', {blogs: blogs});
        })
        .catch((err) => {
            console.log(err);
        });
});

//re-direct to homepage
app.get('/home', (req, res) => {
    res.redirect('/');
});

//about page route
app.get('/about', (req, res) => {
    res.render('about');
});

//all blogs page route
app.get('/blogs', (req, res) => {
    Blog.find({})
        .sort({createdAt: -1})
        .then((blogs) => {
            res.render('blogs', {blogs: blogs});
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((blog) => {
            res.render('blogPage', {blog: blog});
         })
        .catch((err) => {
            console.log(err);
         });
});

app.get('/create', (req, res) => {
    res.render('create');
});

//create blog route
app.get('/create-blog', (req, res) => {
    // const blog = new Blog({
    //     title: req.body.title,
    //     snippet: req.body.snippet,
    //     body: req.body.body,
    //     date: Date.now()
    // });
    //test object id : 6568b7d21aa47b6eb6097fd4
    const blog = new Blog(
        {
            title: 'test blog title',
            snippet: 'test blog snippet',
            body: 'test blog body'
        }
    );
    console.log(blog);
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//404 page - this must go at the end of the file
app.get('*', (req, res) => {
    res.status(404).render('404');
});

