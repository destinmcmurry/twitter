const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'html'); 
app.engine('html', nunjucks.render); 
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

// app.use(function (req, res, next) {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

// app.get('/', (req, res) => {
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render('index', {title: 'Hall of Fame', people: people});
// });

// const locals  = {
//     title: 'An Example',
//     people: [
//         {name: 'Gandalf'},
//         {name: 'Frodo'},
//         {name: 'Hermione'}
//     ]
// };

// nunjucks.render('index.html', locals, function(err, output) {
//     console.log(output);
// });

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});

