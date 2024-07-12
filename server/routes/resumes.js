var express = require('express');
const {mongoose} = require("mongoose");
const {resumeSchema} = require("../model/schema");
var router = express.Router();
const Resume = mongoose.model("Resume", resumeSchema, "resumes");

let resumes = [];

router.get('/', async function (req, res, next) {
    // console.log("resumes: ", resumes);
    const email = req.headers.email;
    let resumes = await Resume.find({email: email});
    res.status(200).send(resumes);
})

router.post('/', async function (req, res, next) {
    const newResume = req.body;
    const email = req.headers.email;
    console.log("Resume : ", newResume);
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

router.delete('/:name', async function (req, res, next) {
    // const toDelete = resumes.find(resume => resume.name == req.params.name);
    // // console.log(toDelete);
    // resumes.splice(resumes.indexOf(toDelete), 1);
    // res.status(204).send({ message: `successfully deleted tailored cover letter titled ${req.params.name}` });
    //
    const name = req.params.name;
    const email = req.headers.email;
    const deletedResume = await Resume.findOneAndDelete({email: email, name: name});
    console.log("Delete");
    console.log(name);
    if (deletedResume) {
        res.status(200).send({name: name});
    } else {
        res.status(400).send({message: "unable to delete"});
    }

})

module.exports = router;