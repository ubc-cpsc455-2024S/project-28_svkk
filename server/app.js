var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const connectDB = require('./database');

var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobs');
var jobPostingsRouter = require('./routes/jobPostings');
var coverLettersRouter = require('./routes/coverLetters');
var tailoredCoverLettersRouter = require('./routes/tailoredCoverLetters');
var resumeRouter = require('./routes/resumes');
var signUpRouter = require('./routes/signUp');
var loginRouter = require('./routes/login')
var editAccountsRouter = require('./routes/editAccount')

var app = express();
connectDB()

// const corsOptions = {
//     origin: "https://project-28-svkk-1.onrender.com", // frontend URI (ReactJS)
// }
// app.use(cors(corsOptions));
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);
app.use('/jobPostings', jobPostingsRouter);
app.use('/coverLetters', coverLettersRouter);
app.use('/tailoredCoverLetters', tailoredCoverLettersRouter);
app.use('/resumes', resumeRouter);
app.use('/signUp', signUpRouter);
app.use('/login', loginRouter);
app.use('/editAccount', editAccountsRouter);

module.exports = app;