import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import ErrorPage from './error-page.jsx';
import MainDashboard from './components/MainDashboard.jsx';
import Signup from './components/Signup.jsx';
import CoverLetterPage from './components/CoverLetterCreationComponents/CoverLetterPage.jsx';
import EditAccounts from './components/EditAccounts.jsx'

// code for implementation of react router for linking pages: 
// https://reactrouter.com/en/main/start/tutorial
// https://stackoverflow.com/questions/44387318/linking-button-to-another-page

const initialCoverLetterList = `[
  {
      "name": "Generic Motorola", 
      "content": "June 3, 2024\\nCasey Alexander\\nMotorola Solutions\\n555 Robson Street\\nVancouver, BC V6B 2B7\\n\\nDear Casey Alexander,\\n\\nRe: Software Developer I, Co-Op\\n\\nI am excited about the opportunity to join Motorola Solutions as a Software Developer I, Co-Op. The prospect of contributing to the development of advanced AI technologies and products that enhance safety and physical security aligns perfectly with my career aspirations and technical skills.\\n\\nMy technical skill set includes proficient use of Java, C/C++, TypeScript/JavaScript, Python, and REST APIs. Notably, my project, InsightUBC, involved developing a robust database for querying UBC course and geological room data using TypeScript and JavaScript with a REST API. This experience honed my skills in employing RESTful services and ensuring data security through solid design principles. My role in developing a Tourism Application using PHP, HTML, and SQL involved coordinating with teammates to design and deploy a secure website for user interactions. These experiences, combined with my exceptional ability to learn new technologies, will help me transition and excel in this role within a short time.\\n\\nI am particularly drawn to this role at Motorola Solutions because of the unique challenges associated with designing, developing, and testing software solutions in C++ and .NET. The opportunity to implement and maintain CI/CD pipelines, focus on usability, responsiveness, scalability, testability, and best coding and design guidelines is incredibly motivating. In addition to my technical skills, I have developed strong communication, problem-solving, teamwork, and organizational skills through volunteering and professional work experiences. For instance, in group projects such as developing the Tourism Application, I collaborated closely with teammates, ensuring effective communication and coordination to achieve our objectives. My role often involved organizing tasks, facilitating meetings, and ensuring that all team members were aligned, enhancing my ability to work effectively in a team setting. My experience in the Ben Matthews lab at UBC for directed studies required meticulous organization and clear communication to accurately collect and analyze data, further demonstrating my ability to manage complex tasks and collaborate effectively with others.\\n\\nThank you for taking the time to review my application. I look forward to the opportunity to discuss how my background, skills, and enthusiasm align with the goals of your team. Please feel free to reach out to me directly at 604-928-7133 or k2i1b@ugrad.cs.ubc.ca, or through the Co-op office at Interviews@sciencecoop.ubc.ca if you have any questions or want to set up an interview.\\n\\nWarm regards,\\nKevin Poon"
  }
]`;
const initialJobPostingList = `[
  {
      "name": "OSI Maritime",
      "content": "159476 - F24 Software Engineer 159476\\nOSI Maritime Systems - Head Office\\nJob Posting Status: Approved\\nActions\\n\\n    Posting Detail\\n\\n    Overview\\n    Map\\n\\nJOB POSTING INFORMATION\\nPlacement Term: 2024 - Fall\\nJob Title : F24 Software Engineer 159476\\nPosition Type: Co-op Position\\nJob Location: Burnaby, BC\\nCountry: Canada\\nDuration: 8 months\\nWork Mode: \\nHybrid\\nSalary Currency: CAD\\nSalary: $22.00 hourly for 40 hours per week\\nSalary Range $: 22 - 25\\nJob Description: About US\\nIn 1977, OSI introduced the first generation electronic chart system for the maritime market and revolutionized navigation. Over the years we have had many firsts. Today, OSI Maritime Systems is a leading provider of integrated navigation and tactical solutions designed for naval and maritime security operations. Among those solutions, the company develops and delivers integrated bridge systems for warships, integrated dived navigation systems for submarines, and C2 systems for small craft. Presently, 23 navies totaling more than 600 warships and submarines operate using OSI systems.\\n\\nThe Job:\\nThe Software Engineering Co-op student will function as a member of our Software Engineering Department and will play a role in the development and testing phases. The Software Engineering co-op will address issues that can be resolved through application of standard procedures or practices and will work under the leadership of colleagues and domain experts within the team. Depending on the software lifecycle the co-op may participate on development tasks or testing tasks to meet the current demands of the schedule.\\n\\nThe position requires three years of university working towards a software or engineering degree. Working knowledge of languages like python and C, and scripting languages such as visual basic and power shell are an asset. The Software Engineering co-op must have strong self-management skills and a keen interest for learning new software skills and working in a real-world team environment in the military and navigation domain. The ability to obtain Security Reliability clearance is an asset.\\n\\nMain Responsibilities:\\n\\n    Address issues that can be resolved through application of standard procedures or practices\\n    Execute manual tests as part of a team to ensure a high-quality software release\\n    Development of small applications or unit tests.\\n    Raise and Test Bugs learning about defect management\\n    Create scripts that support the production, deployment, configuration and release of the OSI Software Suite\\n    Produce relevant documents, analysis or studies to support software development work (examples: read-me files, installation instructions, root cause analysis reports, and decision analysis reports)\\n\\nJob Requirements: Working knowledge of languages like python and C, and scripting languages such as visual basic and power shell are an asset. The Software Engineering co-op must have strong self-management skills and a keen interest for learning new software skills and working in a real-world team environment in the military and navigation domain. The ability to obtain Security Reliability clearance is an asset.\\nCitizenship Requirement: Canadian & Permanent Residents & Refugees\\nTargeted Co-op Programs: \\nAPPLICATION INFORMATION\\nApplication Deadline: June 7, 2024 09:00 AM\\nApplication Procedure: Through UBC Science Co-op\\nEmployer's Application Link: n/a\\nCover Letter Required?: Yes\\nAddress Cover Letter to: Ms. Nisha Sandher\\nApplication Documents Required: Job Application Summary Sheet, Cover Letter on Co-op Header, Resume on Co-op Header, UBC Transcript\\nORGANIZATION INFORMATION\\nOrganization: OSI Maritime Systems\\nCountry: Canada"
  },
  {
      "name": "CIBC",
      "content": "Application / Software Developer Co-op - Personal Banking & Direct financial Services Technology\\nApply\\n\\nlocations\\n    Toronto, ON\\n\\ntime type\\n    Full time\\n\\nposted on\\n    Posted 29 Days Ago\\n\\njob requisition id\\n    2410957\\n\\nWe’re building a relationship-oriented bank for the modern world. We need talented, passionate professionals who are dedicated to doing what’s right for our clients.\\n\\nAt CIBC, we embrace your strengths and your ambitions, so you are empowered at work. Our team members have what they need to make a meaningful impact and are truly valued for who they are and what they contribute.\\n\\nTo learn more about CIBC, please visit CIBC.com\\n\\nWhat you’ll be doing \\n\\nJoin our CIBC Technology team as an Application Developer Co-Op and have a real impact in making our clients’ ambitions a reality! This is a great opportunity to be a part of an innovation-focused team that is helping to drive CIBC’s digital transformation by developing, testing, and delivering easy to use, flexible, and personalized banking solutions. You’ll have an opportunity to assist in developing, testing and supporting the implementation of cross-functional, multi-platform application systems. Be part of an innovation-focused team that creates easy, flexible, and personalized banking solutions to enhance client experience and change the way that people bank. \\n\\nAt CIBC we enable the work environment most optimal for you to thrive in your role. You’ll have the flexibility to manage your work activities within a hybrid work arrangement where you’ll spend 1-3 days per week on-site, while other days will be remote.\\n\\nImportant information \\n\\nPlease note, we have multiple positions available under this posting and you may be considered by more than one hiring team \\n\\n    You must be currently enrolled in post-secondary education and returning to full-time studies to be eligible. However, you do not need to be in a registered Co-Op program to be considered for a role.\\n\\n    Recruitment timeline: Applications review – May/June; Interviews – June/July; Offers - July.\\n    Please include your resume (no more than 2 pages), a cover letter (no more than 1 page), and your most recent unofficial transcript with your application. These should all be uploaded into the Resume section of the application as one pdf document.\\n\\n    4 and 8 month opportunities available\\n\\n\\nHow you’ll succeed \\n\\n    Programming- You will develop, code and test computer programs for straightforward assignments. Review, analyze, and modify programming systems, including encoding, testing, and debugging. \\n\\n    System Implementation- You will participate in the technical design, development, and integration of cross functional, multi-platform application systems. \\n\\n    Coordination- You can effectively interact with stakeholders, end users, business analysts, and technical resources to gather requirements and prepare design specifications as instructed by senior team members. \\n    Communication - You can demonstrate excellent verbal and written communication skills to effectively articulate ideas and opinions that involve research, interpretation, and assessment.\\n\\n\\nWho you are \\n\\n    You act like an owner. You thrive when you're empowered to take initiative, go above and beyond, and deliver results.\\n    You give meaning to data. You enjoy investigating complex problems and making sense of information. You communicate detailed information in a meaningful way.\\n\\n    You love to learn. You're passionate about growing your knowledge. You have a strong sense of curiosity.\\n\\n    You're digitally savvy. You seek out innovative solutions and embrace evolving technologies. You can easily adapt to new tools and trends. \\n\\n    You're motivated by collective success. You know that teamwork can transform a good idea into a great one. You know that an inclusive team that enjoys working together can bring a vision to life.\\n\\n    Values matter to you. You bring your real self to work and you live our values – trust, teamwork and accountability.\\n\\n\\nWhat CIBC Offers\\n\\nAt CIBC, your goals are a priority. We start with your strengths and ambitions as an employee and strive to create opportunities to tap into your potential.\\n\\n    We work to recognize you in meaningful, personalized ways including a competitive compensation, a banking benefit*, wellbeing support, and additional offers such as employee and family assistance programs and MomentMakers, our social, points-based recognition program.\\n\\n    Our spaces and technological toolkit will make it simple to bring together great minds to create innovative solutions that make a difference for our clients.\\n\\n*Subject to program terms and conditions\\n\\nWhat you need to know\\n\\n    CIBC is committed to creating an inclusive environment where all team members and clients feel like they belong. We seek applicants with a wide range of abilities and we provide an accessible candidate experience. If you need accommodation, please contact Mailbox.careers-carrieres@cibc.com\\n\\n    You need to be legally eligible to work at the location(s) specified above and, where applicable, must have a valid work or study permit.\\n\\n    We may ask you to complete an attribute-based assessment and other skills tests (such as simulation, coding, French proficiency, MS Office). Our goal for the application process is to get to know more about you, all that you have to offer, and give you the opportunity to learn more about us.\\n\\nJob Location\\nToronto-81 Bay, 26th Floor\\n\\nEmployment Type\\nTemporary (Fixed Term)\\n\\nWeekly Hours\\n37.5\\n\\nSkills"
  }
]`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/MainDashboard",
    element: <MainDashboard />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/Signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/EditAccounts",
    element: <EditAccounts />,
    errorElement: <ErrorPage />
  },
  {
    path: "/CoverLetterPage",
    element: <CoverLetterPage/>,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
