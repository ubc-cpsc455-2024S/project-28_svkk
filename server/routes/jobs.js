var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Job = require('../model/job');

let jobs = [

      {
          jobTitle: "Software Engineering Intern",
          company: "Microsoft",
          jobType: "Onsite",
          location: "Vancouver, BC",
          dateApplied: "2024-06-01",
          duration: "Aug. 2024 - Dec. 2024",
          link: "https://shorturl.at/D3MlH",
          coverLetterUsed: "",
          userEmail: "silvanahuang23@gmail.com"
      },
      {
          jobTitle: "Software Engineering Intern - Fullstack (Product)",
          company: "Super.com",
          jobType: "Remote",
          location: "Toronto, ON",
          dateApplied: "2024-06-03",
          duration: "Sept. 2024 - Dec. 2024",
          link: "https://shorturl.at/xnIf6",
          coverLetterUsed: "",
          userEmail: "silvanahuang23@gmail.com"
      },
      {
          jobTitle: "Software Development Engineer Intern",
          company: "Amazon",
          jobType: "Onsite",
          location: "Halifax, NS, Canada",
          dateApplied: "2024-06-05",
          duration: "Sept. 2024 - Dec. 2024",
          link: "https://shorturl.at/QvKB0",
          coverLetterUsed: "",
          userEmail: "silvanahuang23@gmail.com"
      }

]

// jobs.forEach(async (job) => {
//   j = new Job(job)
//   await j.save()
// })


router.get('/:userEmail', async(req, res) => {
  try {
    console.log("getting jobs...")
    const jobs = await Job.find({ userEmail: req.params.userEmail});
    //console.log("all jobs of the user: ", jobs);
    return res.send(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
  
});


router.post('/addJob', async(req, res) => {
  let jobTitle = req.body.jobTitle
  let company = req.body.company
  let jobType = req.body.jobType
  let location = req.body.location
  let dateApplied = req.body.dateApplied
  let duration = req.body.duration
  let link = req.body.link
  let coverLetterUsed = req.body.coverLetterUsed
  let userEmail = req.body.userEmail
  console.log('email is: ', userEmail);

  let newJob = new Job({
                    jobTitle: jobTitle,
                    company: company,
                    jobType: jobType,
                    location: location,
                    dateApplied: dateApplied,
                    duration: duration,
                    link: link,
                    coverLetterUsed: coverLetterUsed,
                    userEmail: userEmail
                    })
  
  console.log("new job is: ", newJob);
  await newJob.save();
  return res.send(newJob);
});

router.post('/delete/:id', async function(req, res, next) {
  // const toDelete = jobs.find((job) => {job.id == req.params.id})
  // jobs.splice(jobs.indexOf(toDelete), 1)
  console.log("called delete")
  await Job.findByIdAndDelete(req.params.id)
  console.log("email: " + req.body.email)
  const jobs = await Job.find({ userEmail: req.body.email});
  res.send(jobs);
});

router.post('/search/', async function(req, res, next) {
  const jobs = await Job.find({ userEmail: req.body.email});
  res.send(jobs);
});

router.post('/search/:filter', async function(req, res, next) {
  // const new_jobs = jobs.filter((job) => {
  //   // console.log(job.jobTitle)
  //   // console.log(req.params.filter)
  //   return job.jobTitle.toLowerCase().includes(req.params.filter.toLowerCase())
  // })
  console.log("email: " + req.body.email)
  
  let filter = req.params.filter
  console.log("filter: " + filter)

  // Took help from stackoverflow to understand how to use regex in mongoose
  // Link: https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find  
  
  const new_jobs_title = await Job.find({"jobTitle": { "$regex": filter, "$options": "i" }})
  console.log("new_jobs_title: " + new_jobs_title)

  const new_jobs_company = await Job.find({"company": { "$regex": filter, "$options": "i" }})
  console.log("new_jobs_company: " + new_jobs_company)

  let final_jobs = new_jobs_title

  for (let i = 0; i < new_jobs_company.length; i++) {
    let add = true
    for (let j = 0; j < new_jobs_title.length; j++) {
      let id_1 = new_jobs_company[i]._id.toString()
      console.log("company: " + id_1)

      let id_2 = new_jobs_title[j]._id.toString()
      console.log("title: " + id_2)

      if (id_1 == id_2) {
        console.log("MATCHING...")
        add = false
        break
      }
    }
    if (add) {
      final_jobs.push(new_jobs_company[i])
    }
  }

  console.log("final_jobs: " + final_jobs)
  res.send(final_jobs);
});

router.put('/:jobId', async (req, res) => {
  const job = await Job.findOne({_id : req.params.jobId });

  if (!job) {
    res.status(404).send({ message: 'Job not found'});
  }

  if (req.body.jobTitle != "") {
    job.jobTitle = req.body.jobTitle;
  }
  if (req.body.company != "") {
    job.company = req.body.company;
  }
  if (req.body.jobType!= "") {
    job.jobType = req.body.jobType;
  }
  if (req.body.location != "") {
    job.location = req.body.location;
  }
  if (req.body.dateApplied != "") {
    job.dateApplied = req.body.dateApplied;
  }
  if (req.body.duration != "") {
    job.duration = req.body.duration;
  }
  if (req.body.link != "") {
    job.link = req.body.link;
  }

  await job.save();

  return res.send(job);

});

module.exports = router;