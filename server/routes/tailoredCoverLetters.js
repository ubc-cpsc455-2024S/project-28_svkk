var express = require('express');
var router = express.Router();

let tailoredCoverLetters = [];

router.get('/', function (req, res, next) {
    console.log("tailored cover letter: ",tailoredCoverLetters);
    res.send(tailoredCoverLetters);
})

router.post('/', function (req, res, next) {
    const newCoverLetter = req.body;
    console.log("Cover Letter : ", newCoverLetter);
    tailoredCoverLetters.push(newCoverLetter);
    res.send(newCoverLetter);
})

router.delete('/:name', function(req, res, next) {
    const toDelete = tailoredCoverLetters.find(tailoredCoverLetter => tailoredCoverLetter.name == req.params.name);
    // console.log(toDelete);
    tailoredCoverLetters.splice(tailoredCoverLetters.indexOf(toDelete), 1);
    res.status(204).send({ message: `successfully deleted tailored cover letter titled ${req.params.name}` });
})

module.exports = router;