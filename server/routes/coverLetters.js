var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

let coverLetters = [
    {
        uuid: uuidv4(),
        name: "Generic Motorola", 
        content: `
        June 3, 2024

        Casey Alexander
        Motorola Solutions
        555 Robson Street
        Vancouver, BC V6B 2B7

        Dear Casey Alexander,

        Re: Software Developer I, Co-Op

        I am excited about the opportunity to join Motorola Solutions as a Software Developer I, Co-Op. The prospect of contributing to the development of advanced AI technologies and products that enhance safety and physical security aligns perfectly with my career aspirations and technical skills.

        My technical skill set includes proficient use of Java, C/C++, TypeScript/JavaScript, Python, and REST APIs. Notably, my project, InsightUBC, involved developing a robust database for querying UBC course and geological room data using TypeScript and JavaScript with a REST API. This experience honed my skills in employing RESTful services and ensuring data security through solid design principles. My role in developing a Tourism Application using PHP, HTML, and SQL involved coordinating with teammates to design and deploy a secure website for user interactions. These experiences, combined with my exceptional ability to learn new technologies, will help me transition and excel in this role within a short time.

        I am particularly drawn to this role at Motorola Solutions because of the unique challenges associated with designing, developing, and testing software solutions in C++ and .NET. The opportunity to implement and maintain CI/CD pipelines, focus on usability, responsiveness, scalability, testability, and best coding and design guidelines is incredibly motivating. In addition to my technical skills, I have developed strong communication, problem-solving, teamwork, and organizational skills through volunteering and professional work experiences. For instance, in group projects such as developing the Tourism Application, I collaborated closely with teammates, ensuring effective communication and coordination to achieve our objectives. My role often involved organizing tasks, facilitating meetings, and ensuring that all team members were aligned, enhancing my ability to work effectively in a team setting. My experience in the Ben Matthews lab at UBC for directed studies required meticulous organization and clear communication to accurately collect and analyze data, further demonstrating my ability to manage complex tasks and collaborate effectively with others.

        Thank you for taking the time to review my application. I look forward to the opportunity to discuss how my background, skills, and enthusiasm align with the goals of your team. Please feel free to reach out to me directly at 604-928-7133 or k2i1b@ugrad.cs.ubc.ca, or through the Co-op office at Interviews@sciencecoop.ubc.ca if you have any questions or want to set up an interview.

        Warm regards,
        Kevin Poon`              
    }
];

router.get('/templates', function (req, res, next) {
    // console.log(templates);
    res.send(templates);
})

router.get('/', function (req, res, next) {
    // console.log(coverLetters);
    res.send(coverLetters);
})

router.post('/', function (req, res, next) {
  const newCoverLetter = req.body;
  //console.log(newCoverLetter);
  coverLetters.push(newCoverLetter);
  //console.log(coverLetters);
  res.send(newCoverLetter);
})

router.delete('/:name', function(req, res, next) {
  const toDelete = coverLetters.find(coverLetter => coverLetter.name == req.params.name);
  // console.log(toDelete);
  coverLetters.splice(coverLetters.indexOf(toDelete), 1);
  res.status(204).send({ message: `successfully deleted cover letter titled ${req.params.name}` });
})

module.exports = router;




