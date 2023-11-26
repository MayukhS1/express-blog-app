const express = require('express');
const app = express();
const port = 3000;

//setup view engine
app.set('view engine', 'ejs');

//homepage route
app.get('/', (req, res) => {
    res.render('index');
});

//re-direct to homepage
app.get('/home', (req, res) => {
    res.redirect('/');
});

//about page route
app.get('/about', (req, res) => {
    res.render('about');
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
