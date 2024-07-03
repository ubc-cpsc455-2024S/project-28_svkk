var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobs');
var jobPostingsRouter = require('./routes/jobPostings');
var coverLettersRouter = require('./routes/coverLetters');
var tailoredCoverLettersRouter = require('./routes/tailoredCoverLetters');
var resumeRouter = require('./routes/resume');

var app = express();
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

module.exports = app;