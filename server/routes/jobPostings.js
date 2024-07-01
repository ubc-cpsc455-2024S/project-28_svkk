var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');


let initialJobPostingList = [
    {
        uuid: uuidv4(),
        name: "OSI Maritime",
        content: 
        `Job Posting: OSI Maritime Systems

        Position: F24 Software Engineer (Co-op Position)

        Location: Burnaby, BC, Canada

        Duration: 8 months

        Work Mode: Hybrid

        Salary: CAD $22.00 - $25.00 hourly for 40 hours per week

        Posting Detail:

        Overview:
        In 1977, OSI introduced the first generation electronic chart system for the maritime market and revolutionized navigation. Over the years, we have had many firsts. Today, OSI Maritime Systems is a leading provider of integrated navigation and tactical solutions designed for naval and maritime security operations. The company develops and delivers integrated bridge systems for warships, integrated dive navigation systems for submarines, and C2 systems for small craft. Presently, 23 navies, totaling more than 600 warships and submarines, operate using OSI systems.

        Job Description:

        About the Job:
        The Software Engineering Co-op student will function as a member of our Software Engineering Department and will play a role in the development and testing phases. The Software Engineering co-op will address issues that can be resolved through the application of standard procedures or practices and will work under the leadership of colleagues and domain experts within the team. Depending on the software lifecycle, the co-op may participate in development tasks or testing tasks to meet the current demands of the schedule.

        Main Responsibilities:

        Address issues that can be resolved through the application of standard procedures or practices.
        Execute manual tests as part of a team to ensure a high-quality software release.
        Develop small applications or unit tests.
        Raise and test bugs, learning about defect management.
        Create scripts that support the production, deployment, configuration, and release of the OSI Software Suite.
        Produce relevant documents, analysis, or studies to support software development work (examples: read-me files, installation instructions, root cause analysis reports, and decision analysis reports).
        Job Requirements:

        Working knowledge of languages like Python and C, and scripting languages such as Visual Basic and PowerShell are an asset.
        Strong self-management skills and a keen interest in learning new software skills.
        Experience working in a real-world team environment in the military and navigation domain.
        Ability to obtain Security Reliability clearance is an asset.
        Eligibility:

        Citizenship Requirement: Canadian & Permanent Residents & Refugees.
        Targeted Co-op Programs: Students with three years of university working towards a software or engineering degree.
        Application Information:

        Application Deadline: June 7, 2024, 09:00 AM
        Application Procedure: Through UBC Science Co-op
        Employer's Application Link: N/A
        Cover Letter Required: Yes
        Address Cover Letter to: Ms. Nisha Sandher
        Application Documents Required: Job Application Summary Sheet, Cover Letter on Co-op Header, Resume on Co-op Header, UBC Transcript
        Organization Information:

        Organization: OSI Maritime Systems
        Country: Canada`
    },
    {
        uuid: uuidv4(),
        name: "CIBC",
        content: `Job Posting: CIBC

        Position: Application / Software Developer Co-op - Personal Banking & Direct Financial Services Technology
        
        Location: Toronto, ON
        
        Time Type: Full-time
        
        Posted On: 29 Days Ago
        
        Job Requisition ID: 2410957
        
        Overview:
        We’re building a relationship-oriented bank for the modern world. We need talented, passionate professionals dedicated to doing what’s right for our clients. At CIBC, we embrace your strengths and ambitions, empowering you at work. Our team members have what they need to make a meaningful impact and are truly valued for who they are and what they contribute. To learn more about CIBC, please visit CIBC.com.
        
        What You’ll Be Doing:
        Join our CIBC Technology team as an Application Developer Co-Op and have a real impact in making our clients’ ambitions a reality! This is a great opportunity to be part of an innovation-focused team that drives CIBC’s digital transformation by developing, testing, and delivering easy-to-use, flexible, and personalized banking solutions. You’ll assist in developing, testing, and supporting the implementation of cross-functional, multi-platform application systems.
        
        Work Environment:
        At CIBC, we enable the work environment most optimal for you to thrive in your role. You’ll have the flexibility to manage your work activities within a hybrid work arrangement, spending 1-3 days per week on-site, while other days will be remote.
        
        Important Information:
        
        Multiple positions are available under this posting and you may be considered by more than one hiring team.
        You must be currently enrolled in post-secondary education and returning to full-time studies to be eligible. You do not need to be in a registered Co-Op program to be considered for a role.
        Recruitment timeline: Applications review – May/June; Interviews – June/July; Offers – July.
        Please include your resume (no more than 2 pages), a cover letter (no more than 1 page), and your most recent unofficial transcript with your application. These should all be uploaded into the Resume section of the application as one PDF document.
        4 and 8-month opportunities available.
        How You’ll Succeed:
        
        Programming: Develop, code, and test computer programs for straightforward assignments. Review, analyze, and modify programming systems, including encoding, testing, and debugging.
        System Implementation: Participate in the technical design, development, and integration of cross-functional, multi-platform application systems.
        Coordination: Effectively interact with stakeholders, end users, business analysts, and technical resources to gather requirements and prepare design specifications as instructed by senior team members.
        Communication: Demonstrate excellent verbal and written communication skills to effectively articulate ideas and opinions that involve research, interpretation, and assessment.
        Who You Are:
        
        Ownership: Thrive when empowered to take initiative, go above and beyond, and deliver results.
        Analytical: Enjoy investigating complex problems and making sense of information, communicating detailed information in a meaningful way.
        Learner: Passionate about growing your knowledge with a strong sense of curiosity.
        Digitally Savvy: Seek out innovative solutions and embrace evolving technologies, easily adapting to new tools and trends.
        Team-Oriented: Motivated by collective success, knowing that teamwork can transform a good idea into a great one. An inclusive team that enjoys working together can bring a vision to life.
        Values-Driven: Bring your real self to work and live our values – trust, teamwork, and accountability.
        What CIBC Offers:
        
        We recognize you in meaningful, personalized ways including competitive compensation, a banking benefit*, well-being support, and additional offers such as employee and family assistance programs and MomentMakers, our social, points-based recognition program.
        Our spaces and technological toolkit will make it simple to bring together great minds to create innovative solutions that make a difference for our clients.
        *Subject to program terms and conditions.
        
        What You Need to Know:
        
        CIBC is committed to creating an inclusive environment where all team members and clients feel like they belong. We seek applicants with a wide range of abilities and provide an accessible candidate experience. If you need accommodation, please contact Mailbox.careers-carrieres@cibc.com.
        You need to be legally eligible to work at the location(s) specified above and, where applicable, must have a valid work or study permit.
        We may ask you to complete an attribute-based assessment and other skills tests (such as simulation, coding, French proficiency, MS Office). Our goal for the application process is to get to know more about you, all that you have to offer, and give you the opportunity to learn more about us.
        Job Location: Toronto-81 Bay, 26th Floor
        
        Employment Type: Temporary (Fixed Term)
        
        Weekly Hours: 37.5
        
        Skills Required:`
    }
];

router.get('/', function(req, res, next) {
    //console.log("job postings list from backend");
    //console.log(initialJobPostingList);
    res.send(initialJobPostingList);
})

router.post('/', function(req, res, next) {

    let newJobPosting = {
        uuid: req.body.uuid,
        name: req.body.name,
        content: req.body.content // This should be a String.
    }

    initialJobPostingList.push(newJobPosting);
    res.send(newJobPosting);

})

router.delete('/:jobPostingName', function(req, res, next) {
    const toDelete = initialJobPostingList.find(jobPosting => jobPosting.name == req.params.jobPostingName);
    initialJobPostingList.splice(initialJobPostingList.indexOf(toDelete), 1);
    console.log("backened: deleted job posting");
    res.send();
})



module.exports = router;