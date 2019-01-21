const express = require('express');
const pug = require('pug');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
    const now = new Date().toString();
    console.log(`${now} : ${req.method} - ${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome Home!!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        message: 'About me!!'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Project Page',
        message: 'My Projects...'
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
