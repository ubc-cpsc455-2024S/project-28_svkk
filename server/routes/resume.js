var express = require('express');
var router = express.Router();

let resumes = [];

router.get('/', function (req, res, next) {
    console.log("resumes: ",resumes);
    res.send(resumes);
})

router.post('/', function (req, res, next) {
    const newResume = req.body;
    console.log("Resume : ", newResume);
    resumes.push(newResume);
    res.send(newResume);
})

router.delete('/:name', function(req, res, next) {
    const toDelete = resumes.find(resume => resume.name == req.params.name);
    // console.log(toDelete);
    resumes.splice(resumes.indexOf(toDelete), 1);
    res.status(204).send({ message: `successfully deleted tailored cover letter titled ${req.params.name}` });
})

module.exports = router;