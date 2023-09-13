const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Server is working!!");
    res.render('index', {
        pageTitle: 'Strona Główma'
    });
});

app.get('/omnie', (req, res) => {
    //res.send("about me");
    res.render('omnie', {
        pageTitle: 'Strona o mnie'
    });
});

app.get('/kontakt', (req, res) => {
    //res.send("contact");
    res.render('kontakt', {
        pageTitle: 'Strona kontakt'
    });
});

app.listen(5000, () => {
    console.log("Server is working!!");
    //test
});