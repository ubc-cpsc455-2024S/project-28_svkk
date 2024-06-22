var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');


const initialCoverLetterList = [
    {   uuid: uuidv4(),
        name: "Generic Motorola",
        content: `June 3, 2024
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
const initialJobPostingList = [
    {
        uuid: uuidv4(),
        name: "OSI Maritime",
        content: `159476 - F24 Software Engineer 159476
OSI Maritime Systems - Head Office
Job Posting Status: Approved
Actions

    Posting Detail

    Overview
    Map

JOB POSTING INFORMATION
Placement Term: 2024 - Fall
Job Title : F24 Software Engineer 159476
Position Type: Co-op Position
Job Location: Burnaby, BC
Country: Canada
Duration: 8 months
Work Mode: 
Hybrid
Salary Currency: CAD
Salary: $22.00 hourly for 40 hours per week
Salary Range $: 22 - 25
Job Description: About US
In 1977, OSI introduced the first generation electronic chart system for the maritime market and revolutionized navigation. Over the years we have had many firsts. Today, OSI Maritime Systems is a leading provider of integrated navigation and tactical solutions designed for naval and maritime security operations. Among those solutions, the company develops and delivers integrated bridge systems for warships, integrated dived navigation systems for submarines, and C2 systems for small craft. Presently, 23 navies totaling more than 600 warships and submarines operate using OSI systems.

The Job:
The Software Engineering Co-op student will function as a member of our Software Engineering Department and will play a role in the development and testing phases. The Software Engineering co-op will address issues that can be resolved through application of standard procedures or practices and will work under the leadership of colleagues and domain experts within the team. Depending on the software lifecycle the co-op may participate on development tasks or testing tasks to meet the current demands of the schedule.

The position requires three years of university working towards a software or engineering degree. Working knowledge of languages like python and C, and scripting languages such as visual basic and power shell are an asset. The Software Engineering co-op must have strong self-management skills and a keen interest for learning new software skills and working in a real-world team environment in the military and navigation domain. The ability to obtain Security Reliability clearance is an asset.

Main Responsibilities:

    Address issues that can be resolved through application of standard procedures or practices
    Execute manual tests as part of a team to ensure a high-quality software release
    Development of small applications or unit tests.
    Raise and Test Bugs learning about defect management
    Create scripts that support the production, deployment, configuration and release of the OSI Software Suite
    Produce relevant documents, analysis or studies to support software development work (examples: read-me files, installation instructions, root cause analysis reports, and decision analysis reports)

Job Requirements: Working knowledge of languages like python and C, and scripting languages such as visual basic and power shell are an asset. The Software Engineering co-op must have strong self-management skills and a keen interest for learning new software skills and working in a real-world team environment in the military and navigation domain. The ability to obtain Security Reliability clearance is an asset.
Citizenship Requirement: Canadian & Permanent Residents & Refugees
Targeted Co-op Programs: 
APPLICATION INFORMATION
Application Deadline: June 7, 2024 09:00 AM
Application Procedure: Through UBC Science Co-op
Employer's Application Link: n/a
Cover Letter Required?: Yes
Address Cover Letter to: Ms. Nisha Sandher
Application Documents Required: Job Application Summary Sheet, Cover Letter on Co-op Header, Resume on Co-op Header, UBC Transcript
ORGANIZATION INFORMATION
Organization: OSI Maritime Systems
Country: Canada`
    },
    {
        uuid: uuidv4(),
        name: "CIBC",
        content: `Application / Software Developer Co-op - Personal Banking & Direct financial Services Technology
Apply

locations
    Toronto, ON

time type
    Full time

posted on
    Posted 29 Days Ago

job requisition id
    2410957

We’re building a relationship-oriented bank for the modern world. We need talented, passionate professionals who are dedicated to doing what’s right for our clients.

At CIBC, we embrace your strengths and your ambitions, so you are empowered at work. Our team members have what they need to make a meaningful impact and are truly valued for who they are and what they contribute.

To learn more about CIBC, please visit CIBC.com

What you’ll be doing 

Join our CIBC Technology team as an Application Developer Co-Op and have a real impact in making our clients’ ambitions a reality! This is a great opportunity to be a part of an innovation-focused team that is helping to drive CIBC’s digital transformation by developing, testing, and delivering easy to use, flexible, and personalized banking solutions. You’ll have an opportunity to assist in developing, testing and supporting the implementation of cross-functional, multi-platform application systems. Be part of an innovation-focused team that creates easy, flexible, and personalized banking solutions to enhance client experience and change the way that people bank. 

At CIBC we enable the work environment most optimal for you to thrive in your role. You’ll have the flexibility to manage your work activities within a hybrid work arrangement where you’ll spend 1-3 days per week on-site, while other days will be remote.

Important information 

Please note, we have multiple positions available under this posting and you may be considered by more than one hiring team 

    You must be currently enrolled in post-secondary education and returning to full-time studies to be eligible. However, you do not need to be in a registered Co-Op program to be considered for a role.

    Recruitment timeline: Applications review – May/June; Interviews – June/July; Offers - July.
    Please include your resume (no more than 2 pages), a cover letter (no more than 1 page), and your most recent unofficial transcript with your application. These should all be uploaded into the Resume section of the application as one pdf document.

    4 and 8 month opportunities available

How you’ll succeed 

    Programming- You will develop, code and test computer programs for straightforward assignments. Review, analyze, and modify programming systems, including encoding, testing, and debugging. 

    System Implementation- You will participate in the technical design, development, and integration of cross functional, multi-platform application systems. 

    Coordination- You can effectively interact with stakeholders, end users, business analysts, and technical resources to gather requirements and prepare design specifications as instructed by senior team members.
    Communication - You can demonstrate excellent verbal and written communication skills to effectively articulate ideas and opinions that involve research, interpretation, and assessment.

Who you are 

    You act like an owner. You thrive when you're empowered to take initiative, go above and beyond, and deliver results.
    You give meaning to data. You enjoy investigating complex problems and making sense of information. You communicate detailed information in a meaningful way.

    You love to learn. You're passionate about growing your knowledge. You have a strong sense of curiosity.

    You're digitally savvy. You seek out innovative solutions and embrace evolving technologies. You can easily adapt to new tools and trends. 

    You're motivated by collective success. You know that teamwork can transform a good idea into a great one. You know that an inclusive team that enjoys working together can bring a vision to life.

    Values matter to you. You bring your real self to work and you live our values – trust, teamwork and accountability.

What CIBC Offers

At CIBC, your goals are a priority. We start with your strengths and ambitions as an employee and strive to create opportunities to tap into your potential.

    We work to recognize you in meaningful, personalized ways including a competitive compensation, a banking benefit*, wellbeing support, and additional offers such as employee and family assistance programs and MomentMakers, our social, points-based recognition program.

    Our spaces and technological toolkit will make it simple to bring together great minds to create innovative solutions that make a difference for our clients.

*Subject to program terms and conditions

What you need to know

    CIBC is committed to creating an inclusive environment where all team members and clients feel like they belong. We seek applicants with a wide range of abilities and we provide an accessible candidate experience. If you need accommodation, please contact Mailbox.careers-carrieres@cibc.com

    You need to be legally eligible to work at the location(s) specified above and, where applicable, must have a valid work or study permit.

    We may ask you to complete an attribute-based assessment and other skills tests (such as simulation, coding, French proficiency, MS Office). Our goal for the application process is to get to know more about you, all that you have to offer, and give you the opportunity to learn more about us.

Job Location
Toronto-81 Bay, 26th Floor

Employment Type
Temporary (Fixed Term)

Weekly Hours
37.5

Skills`
    }
];

let users = [
    {
        uuid: uuidv4(),
        username: "Kevin123",
        password: bcrypt.hashSync("password"),
        email: "kevinp@live.ca",
        name: "Kevin",
        resumes: [],
        coverLetters: initialCoverLetterList,
        jobPostings: initialJobPostingList,
        tailoredCoverLetters: [],
        appliedJobPostings: {
            idle: [],
            pending: [],
            fulfilled: [],
            rejected: []
        }
    }
]

// Of the form
// {uuid: 1, token: 2}
let activeTokens = [];

// Login
router.post('/login', function(req, res, next) {
    let expectedRequestForm = {
        username: "hi",
        password: "hi"
    }
    console.log("requesting login");
    console.log(req.body);
    let request = (req.body);
    let input_username = request.username;
    let input_password = (request.password);

    console.log(users);
    console.log(users.length);
    for (const user of users) {
        console.log(user);
        console.log("Comparing "+ input_username + " with " + user.username);
        if (input_username === user.username) {
            console.log("Comparing "+ input_password + " with " + user.password);
            if (bcrypt.compareSync(input_password, user.password)) {
                console.log("Success ");
                let user_session_token = uuidv4();
                let token_object = {
                    uuid: user.uuid,
                    token: user_session_token,
                    user: user
                }
                let newActiveTokens = [];
                for (const token of activeTokens) {
                    if (token.uuid !== user.uuid) {
                        newActiveTokens.push(token);
                    }
                }
                newActiveTokens.push(token_object);
                activeTokens = newActiveTokens;
                console.log("Created session token " + user_session_token + " for user " + user.uuid);

                console.log("number of active tokens " + activeTokens.length)
                return res.status(200).send({
                    token_object
                });

                }
            return res.status(400).send({message: "Wrong Password"});
        }
    }
    return res.status(404).send({message: "User not found"})
    // return res.send();
});

router.post('/logout', function(req, res, next) {
    let expectedRequestForm = {
        uuid: "2343242",
        token: "324324324"
    }
    let loggedOut = false;
    if (activeSession(req.body)) {
        let newTokens = [];
        for (const token of activeTokens) {
            if (token.uuid === req.body.uuid && token.token === req.body.token) {
                loggedOut = true;
            } else {
                newTokens.push(token);
            }
        }
        activeTokens = newTokens;
        if (loggedOut) {
            return res.status(200).send({message: "Logged out. See you next time!"});
        } else {
            return res.status(400).send({message: "Logged in but could not log out."});
        }

    }
    return res.status(404).send({message: "User not currently logged in at the time of request."});
});

router.get('/info', function(req, res, next) {
    let expectedRequestForm = {
        uuid: "34124124",
        token: "h324324324324324324"
    }
    console.log("requesting user");

    let input_uuid = req.body.uuid;
    let input_token = (req.body.token);
    console.log(activeTokens);
    for (const token of activeTokens) {
        console.log("comparing " + input_uuid + " with " + token.uuid);
        if (input_uuid === token.uuid) {
            console.log("comparing " + input_token + " with " + token.token);
            if (input_token === token.token) {
                return res.status(200).send(JSON.stringify(token.user));
            }
            return res.status(400).send({message: "Invalid Token please try again"})
        }
    }
    return res.status(404).send({message: "User not found"});
    // return res.send();
});

router.post('/', function(req, res, next) {
    let expectedRequestForm = {
        username: "Kevin123",
        password: "password",
        email: "kevinp@live.ca",
        name: "Kevin",
    }

    let request = req.body;
    let uniqueEmail = true;

    for (const user of users) {
        if (request.email === user.email) {
            uniqueEmail = false;
        }
    }

    if (uniqueEmail) {
        let newUser = {
            uuid: uuidv4(),
            username: request.username,
            password: bcrypt.hashSync(request.password),
            email: request.email,
            name: request.name,
            resumes: [],
            coverLetters: [],
            jobPostings: [],
            tailoredCoverLetters: [],
            appliedJobPostings: {
                idle: [],
                pending: [],
                fulfilled: [],
                rejected: []
            }
        }
        users.push(newUser);
        return res.status(200).send(JSON.stringify(newUser));
    } else {
        return res.status(400).send({message: "Email is not unique"})
    }

});

router.delete('/', function(req, res, next) {
    let expectedRequestForm = {
        uuid: 5,
        token: 13214,
        username: "Kevin123",
        password: "password",
    }
    let request = req.body;
    let remainingUsers = [];
    let remainingTokens = [];
    let successfulDelete = false;
    let successfulLogout = false;
    let loggedIn = false;
    let wrongCredentials = true;

    for (const token of activeTokens) {
        if (token.uuid === request.uuid && token.token === request.token) {
            loggedIn = true;
            for (const user of users) {
                if (request.username === user.username &&
                    bcrypt.compareSync(request.password, user.password) &&
                    request.uuid === user.uuid) {
                    successfulDelete = true;
                    wrongCredentials = false;
                } else {
                    remainingUsers.push(user);
                }
            }
            if (wrongCredentials) {
                return res.status(400).send({message: "Logged in but provided wrong credentials"});
            }
            // Remove token
            for (const token of activeTokens) {
                if (token.uuid === request.uuid && token.token === request.token) {
                    successfulLogout = true;
                } else {
                    remainingTokens.push(token);
                }
            }
            break;
        }
    }

    if (!loggedIn) {
        return res.status(400).send({message: "User is currently not logged in. (Does not have an active session)"});
    }
    if (successfulDelete) {
        users = remainingUsers;
        activeTokens = remainingTokens;
        return res.status(200).send({message: "User deleted."});
    } else {
        return res.status(404).send({message: "User not found."});
    }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    return res.send(users);
});

router.patch('/', function(req, res, next) {
    let expectedRequestForm = {
        uuid: "5",
        token: "51241",
        user: {}
    }
    console.log("requesting patch");

    let updatedUser = false;
    console.log(activeSession(req.body));
    if (activeSession(req.body) && req.body.uuid === req.body.user.uuid) {
        let newUsers = [];
        for (const user of users) {
            if (user.uuid === req.body.user.uuid) {
                // Update the user
                let userPatchedUser = req.body.user;
                // Ensure that this update cannot update another user.
                userPatchedUser.uuid = user.uuid;
                newUsers.push(userPatchedUser);
                updatedUser = true;
            } else {
                newUsers.push(user);
            }
        }
        users = newUsers;
    } else {
        return res.status(400).send("You are not logged in to the account you are trying to update.");
    }
    if (updatedUser) {
        return res.status(200).send(req.body.user);
    } else {
        return res.status(404).send({message: "User not found. Please create a user."});
    }
});

function activeSession(responseObject) {
    const uuid = responseObject.uuid;
    const token1 = responseObject.token;
    for (const token of activeTokens) {
        if (token.uuid === uuid && token.token === token1) {
            return true;
        }
    }
    return false;
}

// Adding a Resume

router.post('/resume', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        resume: {
            uuid: -1,
            name: "name",
            content: "String"
        }
    }
    let successfulAdd = false;
    let request = req.body;
    const resume = request.resume;

    if (activeSession(request)) {
        let newResume = {
            uuid: uuidv4(),
            name: resume.name,
            content: resume.content // This should be a String.
        }

        for (let user of users) {
           if (user.uuid === request.uuid) {
               user.resumes.push(newResume);
               successfulAdd = true;
               return res.status(200).send(JSON.stringify(newResume));
           }
        }

        return res.status(400).send({message: "Logged in but could not add resume"});
    } else {
        return res.status(400).send({message: "Please log in before adding a Resume"});
    }

});

router.patch('/resume', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        resume: {
            uuid: "23213213",
            name: "name",
            content: "String"
        }
    }
    let successfulPatch = false;
    let request = req.body;
    const userResume = request.resume;

    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let resume of user.resumes) {
                    if (resume.uuid === userResume.uuid) {
                        tempList.push(userResume);
                        successfulPatch = true;
                    } else {
                        tempList.push(resume);
                    }
                }
                user.resumes = tempList;
                break;
            }
        }
        if (successfulPatch) {
            return res.status(200).send(JSON.stringify(userResume));
        } else {
            return res.status(400).send({message: "Logged in but could not edit resume"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Resume"});
    }
});

router.delete('/resume', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        resume: {
            uuid: "23213213"
        }
    }

    if (req.body.resume.uuid === undefined) {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }
    let successfulDelete = false;
    let request = req.body;
    const deleteID = request.resume.uuid;

    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let resume of user.resumes) {
                    if (resume.uuid === deleteID) {
                        successfulDelete = true;
                    } else {
                        tempList.push(resume);
                    }
                }
                user.resumes = tempList;
                break;
            }
        }
        if (successfulDelete) {
            return res.status(200).send(JSON.stringify(deleteID));
        } else {
            return res.status(400).send({message: "Logged in but could not edit resume"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Resume"});
    }
});

// Cover Letter

router.post('/coverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        coverLetter: {
            uuid: -1,
            name: "name",
            content: "String"
        }
    }
    let successfulAdd = false;
    let request = req.body;
    const coverLetter = request.coverLetter;

    if (activeSession(request)) {
        let newCoverLetter = {
            uuid: uuidv4(),
            name: coverLetter.name,
            content: coverLetter.content // This should be a String.
        }

        for (let user of users) {
            if (user.uuid === request.uuid) {
                user.coverLetters.push(newCoverLetter);
                successfulAdd = true;
                return res.status(200).send(JSON.stringify(newCoverLetter));
            }
        }

        return res.status(400).send({message: "Logged in but could not add cover letter"});
    } else {
        return res.status(400).send({message: "Please log in before adding a Cover Letter"});
    }

});

router.patch('/coverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        coverLetter: {
            uuid: "23213213",
            name: "name",
            content: "String"
        }
    }
    let successfulPatch = false;
    let request = req.body;


    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let coverLetter of user.coverLetters) {
                    if (request.coverLetter.uuid === coverLetter.uuid) {
                        tempList.push(coverLetter);
                        successfulPatch = true;
                    } else {
                        tempList.push(coverLetter);
                    }
                }
                user.coverLetters = tempList;
                break;
            }
        }
        if (successfulPatch) {
            return res.status(200).send(JSON.stringify(coverLetter));
        } else {
            return res.status(400).send({message: "Logged in but could not edit cover letter"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Cover Letter"});
    }
});

router.delete('/coverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        coverLetter: {
            uuid: "23213213"
        }
    }
    if (req.body.coverLetter.uuid === undefined) {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }
    let successfulDelete = false;
    let request = req.body;
    const deleteID = request.coverLetter.uuid;

    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let coverLetter of user.coverLetters) {
                    if (coverLetter.uuid === deleteID) {
                        successfulDelete = true;
                    } else {
                        tempList.push(coverLetter);
                    }
                }
                user.coverLetters = tempList;
                break;
            }
        }
        if (successfulDelete) {
            return res.status(200).send(JSON.stringify(deleteID));
        } else {
            return res.status(400).send({message: "Logged in but could not remove cover letter"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Cover Letter"});
    }
});

// Job posting

router.post('/jobPosting', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        jobPosting: {
            uuid: -1,
            name: "name",
            content: "String"
        }
    }
    let successfulAdd = false;
    let request = req.body;
    const jobPosting = request.jobPosting;

    if (activeSession(request)) {
        let newJobPosting = {
            uuid: uuidv4(),
            name: jobPosting.name,
            content: jobPosting.content // This should be a String.
        }

        for (let user of users) {
            if (user.uuid === request.uuid) {
                user.jobPostings.push(newJobPosting);
                successfulAdd = true;
                return res.status(200).send(JSON.stringify(newJobPosting));
            }
        }

        return res.status(400).send({message: "Logged in but could not add job posting"});
    } else {
        return res.status(400).send({message: "Please log in before adding a Job Posting"});
    }

});

router.patch('/jobPosting', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        jobPosting: {
            uuid: "23213213",
            name: "name",
            content: "String"
        }
    }
    let successfulPatch = false;
    let request = req.body;

    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let jobPosting of user.jobPostings) {
                    if (request.jobPosting.uuid === jobPosting.uuid) {
                        tempList.push(jobPosting);
                        successfulPatch = true;
                    } else {
                        tempList.push(jobPosting);
                    }
                }
                user.jobPostings = tempList;
                break;
            }
        }
        if (successfulPatch) {
            return res.status(200).send(JSON.stringify(coverLetter));
        } else {
            return res.status(400).send({message: "Logged in but could not edit job posting"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }
});

router.delete('/jobPosting', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        jobPosting: {
            uuid: "23213213"
        }
    }
    if (req.body.jobPosting.uuid === undefined) {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }


    let successfulDelete = false;
    let request = req.body;
    const deleteID = request.jobPosting.uuid;

    if (activeSession(request)) {
        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let jobPosting of user.jobPostings) {
                    // Delete
                    console.log("deleting ");
                    console.log(user.jobPostings);
                    if (jobPosting.uuid === deleteID) {
                        successfulDelete = true;
                    } else {
                        tempList.push(jobPosting);
                    }
                }
                user.jobPostings = tempList;
                console.log("Resulting joblist");
                console.log(user.jobPostings);
                break;
            }
        }
        if (successfulDelete) {
            return res.status(200).send(JSON.stringify(deleteID));
        } else {
            return res.status(400).send({message: "Logged in but could not remove job posting"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }
});

// ===== Tailored Cover Letter =====
router.post('/tailoredCoverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        tailoredCoverLetter: {
            uuid: -1,
            name: "name",
            content: "String"
        }
    }

    let request = req.body;
    const tailoredCoverLetter = request.tailoredCoverLetter;

    if (activeSession(request)) {
        let newTailoredCoverLetter = {
            uuid: uuidv4(),
            name: tailoredCoverLetter.name,
            content: tailoredCoverLetter.content // This should be a String.
        };

        for (let user of users) {
            if (user.uuid === request.uuid) {
                user.tailoredCoverLetters.push(newTailoredCoverLetter);
                return res.status(200).send(JSON.stringify(newTailoredCoverLetter));
            }
        }

        return res.status(400).send({message: "Logged in but could not add tailored cover letter"});
    } else {
        return res.status(400).send({message: "Please log in before adding a Tailored Cover Letter"});
    }
});

router.patch('/tailoredCoverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        tailoredCoverLetter: {
            uuid: "23213213",
            name: "name",
            content: "String"
        }
    }

    let request = req.body;
    const tailoredCoverLetter = request.tailoredCoverLetter;

    if (activeSession(request)) {
        let successfulPatch = false;

        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let letter of user.tailoredCoverLetters) {
                    if (letter.uuid === tailoredCoverLetter.uuid) {
                        tempList.push(tailoredCoverLetter);
                        successfulPatch = true;
                    } else {
                        tempList.push(letter);
                    }
                }
                user.tailoredCoverLetters = tempList;
                break;
            }
        }

        if (successfulPatch) {
            return res.status(200).send(JSON.stringify(tailoredCoverLetter));
        } else {
            return res.status(400).send({message: "Logged in but could not edit tailored cover letter"});
        }
    } else {
        return res.status(400).send({message: "Please log in before editing a Tailored Cover Letter"});
    }
});

router.delete('/tailoredCoverLetter', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        tailoredCoverLetter: {
            uuid: "23213213"
        }
    }

    if (req.body.tailoredCoverLetter.uuid === undefined) {
        return res.status(400).send({message: "Please log in before editing a Job Posting"});
    }

    let request = req.body;
    const deleteID = request.tailoredCoverLetter.uuid;

    if (activeSession(request)) {
        let successfulDelete = false;

        for (let user of users) {
            if (user.uuid === request.uuid) {
                let tempList = [];
                for (let letter of user.tailoredCoverLetters) {
                    if (letter.uuid === deleteID) {
                        successfulDelete = true;
                    } else {
                        tempList.push(letter);
                    }
                }
                user.tailoredCoverLetters = tempList;
                break;
            }
        }

        if (successfulDelete) {
            return res.status(200).send(JSON.stringify(deleteID));
        } else {
            return res.status(400).send({message: "Logged in but could not remove tailored cover letter"});
        }
    } else {
        return res.status(400).send({message: "Please log in before deleting a Tailored Cover Letter"});
    }
});

// Tailoring the Cover Letter
router.get('/tailor', function(req, res) {
    let expectedRequestForm = {
        uuid: "345435",
        token: "32432432",
        resume: "",
        coverLetter: "",
        jobPosting: "",
        additionalRequest: ""
    };
    const response = req.body;
    let apiResponse = null;
    if (activeSession(response)) {
        apiResponse = sendFullTailorRequest(response.uuid, response.coverLetter, response.jobPosting, response.additionalRequest);

        if (apiResponse !== null) {
            return res.status(200).send(JSON.stringify({message: apiResponse}));
        }
        return res.status(400).send({message: "Logged in but could not get tailored response"});

    }
    return res.status(400).send({message: "Please log in before editing a Job Posting"});

});


function activeSession(responseObject) {
    const uuid = responseObject.uuid;
    const token1 = responseObject.token;
    for (const token of activeTokens) {
        if (token.uuid === uuid && token.token === token1) {
            return true;
        }
    }
    return false;
}

// All the arguments should be Strings.
function sendFullTailorRequest(resume1, coverLetter, jobPosting, additionalRequests) {
    let resume = resume1
    let cover_letter = coverLetter
    let job_posting = jobPosting
    let additional_requests = additionalRequests;

    console.log(generateGPTRequestString(resume,cover_letter,job_posting, additional_requests));

    // Referenced from Chat-GPT Postman API Documentation
    let myHeaders = new Headers();
    // Body of the request sent is in json format
    myHeaders.append("Content-Type", "application/json");
    // Media types accepted are in json format
    myHeaders.append("Accept", "application/json");
    // This is my authorization token for my account
    myHeaders.append("Authorization", "Bearer sk-proj-2gUnSpGlbiyUdBZ7LFMvT3BlbkFJ17KDuvY4x3mf7tiiKcom");

    // models we can replace it with for quality
    //gpt-4o
    //gpt-3.5-turbo
    let raw = JSON.stringify({
        "model": "gpt-4o",
        "messages": [
            {
                "role": "user",
                "content": generateGPTRequestString(resume,cover_letter,job_posting, additional_requests)
            }
        ]
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // Referenced from Chat-GPT Postman API documentation

    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            let jsonObject = JSON.parse(result);
            let message = (jsonObject.choices[0].message.content);
            console.log(message);
            setAPIResponse(message);
        })
        .catch(error => console.log("This is an Error: ", error));
}

function generateGPTRequestString(resume, cover_letter, job_posting, additional_requests) {
    const today = new Date();
    const date = today.toLocaleDateString("en-US");
    return `Here is what I wrote. Please tailor it to the job application.
    
        Resume:
        
        ${resume}
        
        this is my cover letter:
        
        ${cover_letter}
        
        The skills above are the ONLY skills I posses. Do not say that I have skills that I did not mention above this line.
        
        Here is the job posting.
        
        ${job_posting}
        
        The resulting cover letter should have the same amount of words or characters as the original. Only put one tab to indent paragraphs.
        Please indent the start of each body paragraph with a tab. Today's date is ${date} and keep the same number of paragraphs as the reference cover letter. Please only provide the finished cover letter. No other input is needed.
        It is absolutely ESSENTIAL that the number of body paragraphs remains the same as in the cover letter I uploaded. If there are 4 paragraphs in the reference cover letter, you must only write 4 paragraphs.
        ${additional_requests}
        `;
}



module.exports = router;
