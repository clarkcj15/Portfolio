if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
} 
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
show('im cool')
const Items = require('./models/items.js')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000; //Heroku

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//INDEX
app.get('/page', (req, res) => {
    Items.findById(req.params.id, (err, foundItem) => {
        if(!err){
            res.render('Index', {
                item: foundItem
            })
        } else {
            res.send(err);
        }
    })
})


//NEW
app.get('/page/New', (req, res) =>{
    res.render('New');
})

//DELETE
app.delete('/page/:id', (req, res) =>{
    Items.findByIdAndRemove(req.params.id, (err, foundItem) =>{
        if(!err){
            res.redirect('/page')
        } else {
            res.send(err);
        }
    })
})


//UPDATE
app.put('/page/:id', (req, res) =>{
    req.body.isComplete = req.body.isComplete === 'on' ? true:false;
    Items.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        if(!err){
            res.redirect('/page')
        } else {
            res.send(err);
        }
    
    })
})


//CREATE
app.get('/page/New', (req, res) =>{
    if(req.body.isComplete === 'on'){
        req.body.isComplete = true
    } else {
        req.body.isComplete = false
    }
    Items.create(req.body, (err, createdItem) => {
        if(!err){
            res.redirect('/page')
        } else {
            res.send(err);
        }
    })
})


//EDIT
app.get('/page/:id/edit', (req, res) =>{
    Items.findById(req.params.id, (err, foundItem) =>{
        if(!err) {
            res.render('Edit', {
                item: foundItem
            })
        } else {
            res.send(err);
        }
    })
})



//SHOW
app.get('/page/:id', (req, res) =>{
    Items.findById(req.params.id, (err, foundItem) => {
        if(!err){
            res.render('Show', {
                item: foundItem
            })
        } else {
            res.send(err);
        }
    })
})

app.get('/page/contact', (req, res) => {
    res.render("Contact");
})


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));