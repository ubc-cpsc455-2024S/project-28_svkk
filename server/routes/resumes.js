var express = require('express');
const {mongoose} = require("mongoose");
const fileUpload = require('express-fileupload');
const pdf = require('pdf-parse')
var router = express.Router();

const { Resume } = require("../model/schema");

// Getting all resumes given an email
router.get('/', async function (req, res, next) {

    const email = req.headers.email;
    let resumes = await Resume.find({email: email});
    res.status(200).send(resumes);
})

// Code written on 31st July 2024 with the help of stackoverflow post https://stackoverflow.com/questions/52140939/how-to-send-pdf-file-from-front-end-to-nodejs-server
router.post('/uploadPDF', fileUpload(), async (req, res) => {
    const receivedFile = req.files.file


    pdf(receivedFile).then((data) => {

        res.send({data: data.text})
    })

})

// Adding a new resume
router.post('/', async function (req, res, next) {
    const newResume = req.body;
    const email = req.headers.email;

    const resumeObject = Resume({
        email: email,
        uuid: newResume.uuid,
        name: newResume.name,
        content: newResume.content
    })
    const check = await resumeObject.save();
    if (check) {
        res.status(200).send(newResume);
    } else {
        res.status(400).send({message: "Unable to add"});
    }
})

// Deleting an existing resume
router.delete('/:name', async function (req, res, next) {
    const name = req.params.name;
    const email = req.headers.email;
    const deletedResume = await Resume.findOneAndDelete({email: email, name: name});


    if (deletedResume) {
        res.status(200).send({name: name});
    } else {
        res.status(400).send({message: "unable to delete"});
    }

})

module.exports = router;