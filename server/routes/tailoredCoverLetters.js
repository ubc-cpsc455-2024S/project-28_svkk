var express = require('express');
const {mongoose} = require("mongoose");
var router = express.Router();

const {TailoredCoverLetter} = require('../model/schema');

let tailoredCoverLetters = [];

// Getting all tailored cover letters given an email
router.get('/', async function (req, res, next) {
    const email = req.headers.email;
    let coverLetters = await TailoredCoverLetter.find({email: email});
    console.log(coverLetters);
    res.status(200).send(coverLetters);
})

// Posting a tailored cover letter
router.post('/', async function (req, res, next) {
    const newCoverLetter = req.body;
    const email = req.headers.email;
    console.log("body");
    console.log(newCoverLetter);
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

// Deleting a tailored cover letter
router.delete('/:name', async function (req, res, next) {
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