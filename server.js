const express = require('express');
const app = express();
const port = 3000;

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
    const blogs = [
        {title: 'How to master nodeJS', snippet: 'This is a blog about nodeJS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
        {title: 'How to master React', snippet: 'This is a blog about React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
        {title: 'How to master Angular', snippet: 'This is a blog about Angular. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
    ];
    res.render('index', {blogs: blogs});
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
    const blogs = [
        {title: 'How to master nodeJS', snippet: 'This is a blog about nodeJS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
        {title: 'How to master React', snippet: 'This is a blog about React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
        {title: 'How to master Angular', snippet: 'This is a blog about Angular. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.'},
    ];
    res.render('blogs', {blogs: blogs});
});

app.get('/create', (req, res) => {
    res.render('create');
});

//404 page - this must go at the end of the file
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
