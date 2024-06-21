var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

const jobs = [

      {
          id: uuidv4(),
          jobTitle: "Software Engineering Intern",
          company: "Microsoft",
          jobType: "Onsite",
          location: "Vancouver, BC",
          dateApplied: "2024-06-01",
          duration: "Aug. 2024 - Dec. 2024",
          link: "https://shorturl.at/D3MlH",
          coverLetterUsed: "",
      },
      {
          id: uuidv4(),
          jobTitle: "Software Engineering Intern - Fullstack (Product)",
          company: "Super.com",
          jobType: "Remote",
          location: "Toronto, ON",
          dateApplied: "2024-06-03",
          duration: "Sept. 2024 - Dec. 2024",
          link: "https://shorturl.at/xnIf6",
          coverLetterUsed: "",
      }, 
      {
          id: uuidv4(),
          jobTitle: "Software Development Engineer Intern",
          company: "Amazon",
          jobType: "Onsite",
          location: "Halifax, NS, Canada",
          dateApplied: "2024-06-05",
          duration: "Sept. 2024 - Dec. 2024",
          link: "https://shorturl.at/QvKB0",
          coverLetterUsed: "",
      }

]


/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send(jobs);
});

router.put('/:jobId', function (req, res, next) {
  const jIndex = jobs.findIndex(j => j.id == req.params.jobId);

  if (jIndex == -1) {
    res.status(404).send({ message: 'Job not found'});
  }

  if (req.body.jobTitle != "") {
    jobs[jIndex].jobTitle = req.body.jobTitle;
  }
  if (req.body.company != "") {
    jobs[jIndex].company = req.body.company;
  }
  if (req.body.jobType!= "") {
    jobs[jIndex].jobType = req.body.jobType;
  }
  if (req.body.location != "") {
    jobs[jIndex].location = req.body.location;
  }
  if (req.body.dateApplied != "") {
    jobs[jIndex].dateApplied = req.body.dateApplied;
  }
  if (req.body.duration != "") {
    jobs[jIndex].duration = req.body.duration;
  }
  if (req.body.link != "") {
    jobs[jIndex].link = req.body.link;
  }

  return res.send(jobs[jIndex]);

});

module.exports = router;
