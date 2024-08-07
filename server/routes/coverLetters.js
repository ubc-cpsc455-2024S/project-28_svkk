var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const users = require("../model/user");
const {mongoose} = require("mongoose");

const {CoverLetter} = require("../model/schema");

const templates = [
    {
      name: "Template 1",
      content: 
       `[MM/DD/YYYY]

        [Name of Hiring Manager]
        Hiring Manager
        [Name of Company]

        Dear [Name of Hiring Manager],

        I am writing to express my strong interest in the [name of position] at [Name of Company]. As a recent graduate with a [Degree obtained], I am excited about the opportunity to contribute my skills and knowledge to a [adjective1OfCompany] and [adjective2OfCompany] company like yours.

        During my studies, I developed a solid foundation in programming languages such as Java, C++, and Python. I also gained hands-on experience in software development through various projects and internships. These experiences have not only sharpened my technical abilities but also honed my problem-solving and analytical skills, which I believe are essential for success in the field of computer science.

        What truly excites me about [Name of Company] is [why you think the company is awesome]. [State something specific about the company (e.g., a project/ initiative) that stood out to you] and I believe that my skills and enthusiasm align perfectly with your company's mission.

        In addition to my technical skills, I am a strong team player and thrive in collaborative environments. I have had the opportunity to work on multidisciplinary teams during my studies, which has taught me the importance of effective communication and cooperation. I am confident that my ability to work well with others, combined with my technical expertise, would make me a valuable asset to the [Name of Company] team.

        I am impressed by [Name of Company]'s commitment to fostering professional growth and providing opportunities for career advancement. I am eager to contribute to your company's success and further develop my skills in a challenging and dynamic environment. I would be honored to be considered for the [name of position] and contribute to the innovative work that [Name of Company] is known for.

        Thank you for considering my application. I have attached my resume for your review. I look forward to the opportunity to discuss how my qualifications align with the requirements of the position in more detail. Please feel free to contact me at your convenience via phone or email.

        Sincerely,
        [Your Name]`
    },
    {
      name: "Template 2",
      content: 
      ` [MM/DD/YYYY]

        [Name of Company]
        [Company Address]

        Dear [Name of Hiring Manager],

        I am excited to apply for the [Name of Internship Position] at [Name of Company]. As a [Year in School, e.g., Junior] majoring in [Your Major] at [University Name], I have been actively seeking opportunities to apply my academic knowledge in a practical setting, and I am excited about the possibility of doing so at [Name of Company]. Your company's [Noteworthy Aspect of Company, e.g., commitment to innovation, excellence in software development] resonates deeply with my career aspirations and academic background.

        In my academic career, I have developed strong skills in [Relevant Skills, e.g., data analysis, programming, project management] through rigorous coursework and hands-on projects. One notable project was [Briefly Describe a Relevant Project, e.g., developing a data-driven web application for a class project], where I [Describe Key Achievements or Learning Outcomes, e.g., led a team to design and implement the application, gaining valuable experience in teamwork and technical problem-solving]. This experience reinforced my ability to [Relevant Skill, e.g., work collaboratively, think critically], which I am eager to bring to [Name of Company].

        [Name of Company]’s reputation for [Unique Feature or Value of the Company, e.g., cutting-edge technology, focus on sustainability] particularly attracted me to this internship. I am especially interested in [Specific Initiative or Project of the Company, e.g., your recent initiative in AI development], as it aligns perfectly with my interest in [Relevant Field or Interest, e.g., artificial intelligence, environmental technology].

        In addition to my academic pursuits, I have actively engaged in [Relevant Extracurricular Activities or Volunteer Work, e.g., student clubs, volunteer programs]. For example, as a member of [Name of Club or Organization], I [Describe a Relevant Role or Contribution, e.g., coordinated events, led a project team], which honed my [Relevant Skill, e.g., leadership, communication] skills. These experiences have prepared me to effectively contribute to [Name of Company] by providing a foundation in [Relevant Skill or Knowledge, e.g., teamwork, project management].

        I am excited about the prospect of bringing my [Your Strength or Skill, e.g., enthusiasm, analytical skills] and [Relevant Knowledge or Experience, e.g., academic background, practical experience] to the [Name of Internship Position] at [Name of Company]. I believe that my [Unique Qualification or Trait, e.g., passion for technology, adaptability] and my [Relevant Skill or Experience, e.g., project experience, academic knowledge] would be an asset to your team. Thank you for considering my application. I look forward to the possibility of contributing to [Name of Company] and learning from your esteemed team!

        Sincerely,
        [Your Full Name]`
    },
    {
      name: "Template 3",
      content: 
      ` [MM/DD/YYYY]

        [Name of Hiring Manager]
        [Name of Company]
        [Company Address]
        [City, State, Zip Code]

        Dear [Name of Hiring Manager],

        I am excited to apply for the [Name of Internship Position] at [Name of Company]. As a [Year in School, e.g., Junior] majoring in [Your Major] at [University Name], I am eager to apply my academic knowledge and enthusiasm for [Relevant Field, e.g., software development, data analysis] in a practical setting. Your company's reputation for [Noteworthy Aspect of Company, e.g., innovative solutions, commitment to excellence] aligns perfectly with my career goals and academic interests.

        During my studies, I have developed a strong foundation in [Relevant Field or Skills, e.g., computer science, data science] through courses such as [List Relevant Courses, e.g., Algorithms, Data Structures, Machine Learning]. I applied this knowledge in a recent project where I [Briefly Describe a Relevant Project, e.g., developed a machine learning model to predict housing prices, collaborating with a team to handle data preprocessing, model training, and evaluation]. This experience enhanced my [Key Skill, e.g., problem-solving, teamwork] and provided valuable insights into [Relevant Topic, e.g., machine learning applications, data analysis techniques].

        I am particularly drawn to [Name of Company] because of your [Unique Feature or Initiative, e.g., cutting-edge projects in AI, dedication to sustainable practices]. Your work on [Mention Specific Project or Initiative, e.g., the development of an AI-driven customer support platform] is especially inspiring and aligns with my interest in [Specific Area Related to Internship, e.g., AI technologies, user experience]. The opportunity to contribute to such impactful projects while learning from experienced professionals at [Name of Company] excites me greatly.

        I am enthusiastic about the prospect of bringing my [Your Strength or Skill, e.g., analytical thinking, adaptability] and [Relevant Experience or Knowledge, e.g., project experience, coursework] to the [Name of Internship Position] at [Name of Company]. I believe my [Unique Qualification or Trait, e.g., passion for technology, eagerness to learn] and background in [Relevant Field or Skill] make me a strong candidate for this role.

        Please find my resume attached for your review. I look forward to the opportunity to discuss how my academic background and skills align with the [Name of Internship Position] at [Name of Company]. You can reach me at [Your Phone Number] or [Your Email Address]. Thank you for considering my application.

        Sincerely,
        [Your Full Name]`
    }
]

// Returning the pre-existing template cover letters for users to edit. (Not user specific)
router.get('/templates', function (req, res, next) {

    res.send(templates);
})

// Getting all cover letters associated with an email
router.get('/', async function (req, res, next) {
    const email = req.headers.email;
    let coverLetters = await CoverLetter.find({email: email});

    res.status(200).send(coverLetters);
})

// Adding a new cover letter
router.post('/', async function (req, res, next) {
    const newCoverLetter = req.body;
    const email = req.headers.email;


    const coverLetterObject = CoverLetter({
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


// Deleting an existing cover letter
router.delete('/:name', async function (req, res, next) {
    const name = req.params.name;
    const email = req.headers.email;
    const deletedCoverLetter = await CoverLetter.findOneAndDelete({email:email, name:name});


    if (deletedCoverLetter) {
        res.status(200).send({name: name});
    } else {
        res.status(400).send({message: "unable to delete"});
    }

})

module.exports = router;




