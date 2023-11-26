const express = require('express');
const app = express();
const port = 3000;

//homepage route
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

//re-direct to homepage
app.get('/home', (req, res) => {
    res.redirect('/');
});

//404 page - this must go at the end of the file
app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
