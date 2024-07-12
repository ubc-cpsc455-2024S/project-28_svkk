var express = require('express');
const {mongoose} = require("mongoose");
const {coverLetterSchema, tailoredCoverLetterSchema} = require("../model/schema");
var router = express.Router();
const TailoredCoverLetter = mongoose.model("TailoredCoverLetter", tailoredCoverLetterSchema, "tailoredCoverLetters");


let tailoredCoverLetters = [];

router.get('/', async function (req, res, next) {
    const email = req.headers.email;
    let coverLetters = await TailoredCoverLetter.find({email: email});
    console.log(coverLetters);
    res.status(200).send(coverLetters);
})

router.post('/', async function (req, res, next) {
    const newCoverLetter = req.body;
    const email = req.headers.email;
    console.log("body");
    console.log(newCoverLetter);
    // coverLetters.push(newCoverLetter);
    //console.log(coverLetters);
    const coverLetterObject = TailoredCoverLetter({
        email: email,
        uuid: newCoverLetter.uuid,
        name: newCoverLetter.name,
        content: newCoverLetter.content
    })
    const check = await coverLetterObject.save();
    if (check) {
        res.status(200).send(newCoverLetter);
    } else {
        res.status(400).send({message: "Unable to add"});
    }
})

router.delete('/:name', async function (req, res, next) {
    // const toDelete = tailoredCoverLetters.find(tailoredCoverLetter => tailoredCoverLetter.name == req.params.name);
    // // console.log(toDelete);
    // tailoredCoverLetters.splice(tailoredCoverLetters.indexOf(toDelete), 1);
    // res.status(204).send({ message: `successfully deleted tailored cover letter titled ${req.params.name}` });
    const name = req.params.name;
    const email = req.headers.email;
    const deletedCoverLetter = await TailoredCoverLetter.findOneAndDelete({email: email, name: name});
    console.log("Delete");
    console.log(name);
    if (deletedCoverLetter) {
        res.status(200).send({name: name});
    } else {
        res.status(400).send({message: "unable to delete"});
    }
})

module.exports = router;