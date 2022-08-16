const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const Joi = require('joi');
const logger = require('./logger');

const app = express();  // return an Express object

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}


// Enabling parsing of json in the body of the request
app.use(express.json());     //express,json() returns a middleware, and then we use that middleware in request processing pipeline

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// custom middleware function
app.use(logger);

// third party middlewares
app.use(helmet());

app.use(function(req, res, next) {
    console.log('Authenticating...');
    next();
});


// Configuration
console.log('Application Name: '+ config.get('name'));
console.log('Mail Server: '+ config.get('mail.host'));

// for setting env variables via terminal: export app_password=1234


const courses = [
    {"id" : 1, "name" : "course1"},
    {"id" : 2, "name" : "course2"},
    {"id" : 3, "name" : "course3"}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});



app.get('/api/courses', (req, res) => {
    res.send(courses);
});



app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given id was not found');
    res.send(course);
});



app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); // req.error
    if (error) {
        res.status(404).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



app.get('/api/posts/:year/:month', (req, res) => {
    res.send([req.query, req.params]);
});



app.put('/api/courses/:id', (req, res) => {
    // check if supplied courseId exist
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given ID was not found.');

    // validating the input
    const { error } = validateCourse(req.body); // req.error
    if (error) {
        res.status(404).send(error.details[0].message);
        return;
    }

    // updating data
    course.name = req.body.name;
    res.send(course);


});



app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given ID was not found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
// set PORT = 5000   --> inside the terminal to set the port
app.listen(port, () => console.log(`Listening on port ${port}...`));