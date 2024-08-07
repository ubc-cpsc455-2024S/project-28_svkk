var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {mongoose} = require("mongoose");


const {JobPosting} = require('../model/schema');

router.get('/', async function (req, res, next) {
    const email = req.headers.email;
    let jobPostings = await JobPosting.find({email: email});

    res.status(200).send(jobPostings);
})

router.post('/', async function (req, res, next) {
    const newJobPosting = req.body;
    const email = req.headers.email;


    let jobPostingObject = JobPosting({
        email: email,
        uuid: newJobPosting.uuid,
        name: newJobPosting.name,
        content: newJobPosting.content // This should be a String.
    });
    const check = await jobPostingObject.save();
    if (check) {
        res.status(200).send(newJobPosting);
    } else {
        res.status(400).send({message: "Unable to add"});
    }
})

router.delete('/:name', async function (req, res, next) {
    const name = req.params.name;
    const email = req.headers.email;
    const deletedJobPosting = await JobPosting.findOneAndDelete({email: email, name: name});

    if (deletedJobPosting) {
        res.status(200).send({name: name});
    } else {
        res.status(400).send({message: "unable to delete"});
    }
})



module.exports = router;