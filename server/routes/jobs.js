var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Job = require('../model/job');
const dayjs = require('dayjs')

// let jobs = [

//       {
//           jobTitle: "Software Engineering Intern",
//           company: "Microsoft",
//           jobType: "Onsite",
//           location: "Vancouver, BC",
//           dateApplied: "2024-06-01",
//           duration: "Aug. 2024 - Dec. 2024",
//           link: "https://shorturl.at/D3MlH",
//           coverLetterUsed: "",
//           userEmail: "silvanahuang23@gmail.com"
//       },
//       {
//           jobTitle: "Software Engineering Intern - Fullstack (Product)",
//           company: "Super.com",
//           jobType: "Remote",
//           location: "Toronto, ON",
//           dateApplied: "2024-06-03",
//           duration: "Sept. 2024 - Dec. 2024",
//           link: "https://shorturl.at/xnIf6",
//           coverLetterUsed: "",
//           userEmail: "silvanahuang23@gmail.com"
//       },
//       {
//           jobTitle: "Software Development Engineer Intern",
//           company: "Amazon",
//           jobType: "Onsite",
//           location: "Halifax, NS, Canada",
//           dateApplied: "2024-06-05",
//           duration: "Sept. 2024 - Dec. 2024",
//           link: "https://shorturl.at/QvKB0",
//           coverLetterUsed: "",
//           userEmail: "silvanahuang23@gmail.com"
//       }

// ]


// jobs.forEach(async (job) => {
//   j = new Job(job)
//   await j.save()
// })


router.get('/:userEmail', async(req, res) => {
  try {

    const jobs = await Job.find({ userEmail: req.params.userEmail});

    return res.send(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
  
});

router.get('/:id', async(req, res) => {
  try {

    const job = await Job.find({ _id: req.params.id});

    return res.send(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
  
});

router.get('/:userEmail/earliest-latest', async (req, res) => {
  try {
    const jobs = await Job.find({ userEmail: req.params.userEmail});
    const jobsEarliestToLatest = jobs.sort((a,b) => {
      if (a === b) {
        return 0;
      }
      return a.dateApplied < b.dateApplied ? -1 : 1;
    })
    return res.send(jobsEarliestToLatest);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
})

router.get('/:userEmail/latest-earliest', async (req, res) => {
  try {
    const jobs = await Job.find({ userEmail: req.params.userEmail});
    const jobsLatestToEarliest = jobs.sort((a,b) => {
      if (a === b) {
        return 0;
      }
      return a.dateApplied < b.dateApplied ? 1 : -1;
    })
    return res.send(jobsLatestToEarliest);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
})


router.post('/addJob', async(req, res) => {

  let jobTitle = req.body.jobTitle
  let company = req.body.company
  let jobType = req.body.jobType
  let location = req.body.location
  let dateApplied = req.body.dateApplied
  let duration = req.body.duration
  let link = req.body.link
  let status = req.body.status
  let coverLetterUsed = req.body.coverLetterUsed
  let tailoredCoverLetterUsed = req.body.tailoredCoverLetterUsed
  let userEmail = req.body.userEmail
  let tags = req.body.tags



  let newJob = new Job({
                    jobTitle: jobTitle,
                    company: company,
                    jobType: jobType,
                    location: location,
                    dateApplied: dateApplied,
                    duration: duration,
                    link: link,
                    status: status,
                    coverLetterUsed: coverLetterUsed,
                    tailoredCoverLetterUsed: tailoredCoverLetterUsed,
                    userEmail: userEmail,
                    tags: tags
                });
  

  await newJob.save();
  const jobs = await Job.find({ userEmail: userEmail});

  return res.send(jobs);
});

router.post('/delete/:id', async function(req, res, next) {

  await Job.findByIdAndDelete(req.params.id)

  const jobs = await Job.find({ userEmail: req.body.email});
  res.send(jobs);
});

router.post('/search/', async function(req, res, next) {
  const jobs = await Job.find({ userEmail: req.body.email});

  res.send(jobs);
});


router.post('/tag/:filters', async function(req, res, next) {
  // const new_jobs = jobs.filter((job) => {


  //   return job.jobTitle.toLowerCase().includes(req.params.filter.toLowerCase())
  // })

  
  let filters = req.params.filters.split(',');

  
  // took help from stackoverflow to for the syntax for filtering by whether the array contains a specific member. Link: https://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value
  const new_jobs = await Job.find({
    userEmail: req.body.email, 
    tags: { $all: filters} });

  res.send(new_jobs)
})

router.post('/tag/', async function(req, res, next) {
    const jobs = await Job.find({ userEmail: req.body.email});
    res.send(jobs)
})


router.post('/search/:filter', async function(req, res, next) {
  // const new_jobs = jobs.filter((job) => {


  //   return job.jobTitle.toLowerCase().includes(req.params.filter.toLowerCase())
  // })
  let email = req.body.email;

  
  let filter = req.params.filter


  // Took help from stackoverflow to understand how to use regex in mongoose
  // Link: https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find  
  
  const new_jobs_title = await Job.find({"jobTitle": { "$regex": filter, "$options": "i" }, "userEmail" : email});


  const new_jobs_company = await Job.find({"company": { "$regex": filter, "$options": "i" }, "userEmail" : email});


  let final_jobs = new_jobs_title

  for (let i = 0; i < new_jobs_company.length; i++) {
    let add = true
    for (let j = 0; j < new_jobs_title.length; j++) {
      let id_1 = new_jobs_company[i]._id.toString()


      let id_2 = new_jobs_title[j]._id.toString()


      if (id_1 == id_2) {

        add = false
        break
      }
    }
    if (add) {
      final_jobs.push(new_jobs_company[i])
    }
  }


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
  if (req.body.dateApplied != dayjs()) {
    job.dateApplied = req.body.dateApplied;
  }
  if (req.body.duration != "") {
    job.duration = req.body.duration;
  }
  if (req.body.link != "") {
    job.link = req.body.link;
  }
  if (req.body.status != "") {
    job.status = req.body.status;
  }
  if (req.body.coverLetter != "") {
    job.coverLetterUsed = req.body.coverLetter;
  }
  if (req.body.tailoredCoverLetter != "") {
    job.tailoredCoverLetterUsed = req.body.tailoredCoverLetter
  }
  if (req.body.tags != "") {
    job.tags = req.body.temptags
  }

  await job.save();


  return res.send(job);

});

module.exports = router;