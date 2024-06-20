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
          duration: "Aug. - Dec. 2024",
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
          duration: "Sep. - Dec. 2024",
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
          duration: "Sept. - Dec. 2024",
          link: "https://shorturl.at/QvKB0",
          coverLetterUsed: "",
      }

]


/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send(jobs);
});

module.exports = router;
