# Team SVKK (Group 28) - Project Title: Application Tailor

## About The Project
The goal of this application is to help match students to their internships based on their current qualifications, minimizing the time consumed in the application process, resulting in an increased success rate during the co-op job search term. This application aims to achieve this by automating the 15-30 mins spent on tailoring a Resume and/or Cover Letter for every job posting. In an economy that requires at least 30 applications sent each week during classes, this often comes at the expense of student’s grades and more importantly their mental health, affecting their long term prospects. This application aims to mitigate these unnecessary drawbacks while maintaining the quality and authenticity of each job application.

![Workflow Status Badge](nhttps://github.com/ubc-cpsc455-2024S/project-28_svkk/actions/workflows/pipeline.yml/badge.svg)


**Project Description: Write 3-5 sentences on your project topic.**
- Who is it for?
    - Students seeking internships during their busy term (applicants)
- What will it do? (What “human activity” will it support?)
    - Allow students to reach more opportunities in their limited job search time, and mitigate its mental and academic drawbacks.
- What type of data will it store?
    - Username
    - Password
    - Email
    - CV
    - Resume
    - Generic Cover Letter
- What will users be able to do with this data?
    1. Accounts: 
        - Create, edit, remove an account.
        - Add, remove CV, Resume, Cover Letter
    2. Core Application Functionality:
        - Generate a Cover Letter given a job posting and (Resume or CV).  The job posting will be:
            - Job posting (Copy paste text initially)
            - Job posting (file uploads - if time permitted)
        - Generate a Resume given a CV and job posting
- What is some additional functionality you can add/remove based on time constraints?
    - Remove the Web scraper portion for URL Job postings. 
    - Add Web scraper functionality to find internship opportunities from UBC CareersOnline, or use other APIs that don’t require logins.
    - Add a resume generating section for first time users who may not have a resume.

 # Goals
**Minimal requirements**
 - [x] Users can Create accounts
 - [x] Users can Edit accounts
 - [x] Users can Remove accounts
 - [x] Users can add a Resume to their account
 - [x] Users can add a Cover Letter to their account.
     
**Standard requirements**
 - [x] Users can add job descriptions 
 - [x] Users can choose from a generic cover letter template and fill it with their professional experience/past projects (can be used by students who have not made a cover letter)
 - [x] Users can generate tailored cover letters given a job posting and a filled-in generic cover letter
 - [x] Users can save job application information on their account organized into 5 categories:
      - Viewing/Considering
      - Sent (Allows the user to keep track of their sent applications)
      - No Response:
      - Responded: 
          - Successful applications
          - Unsuccessful Applications
- [x] Users can filter jobs by tags (e.g., frontend, backend, fullstack, data)
- [x] Users can search for jobs they’ve applied to by name and/or job title
 
**Stretch Goals**
  - [x] Users can specify the font and font-size of the tailored cover letter
  - [x] Users can upload their documents as an option
  - [ ] Users can generate a **Resume** given a Job Posting, and select which CV they want to base their Resume on.	
          -  Resume = Job Posting + CV	
  - [ ]  Add web scraper portions to enable URLs to job postings to be used instead of copy-pasting text for more convenience. 
  - [ ]  Add suggestions to improve the resume/cover letter based on certain criteria. 
  - [ ]  Users can see the **summary** on a webpage (html file similar to assignment 1), using analytics
     
**Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks!
This will help you divide up work among your teammates.**

  **Users can Create accounts**
    - Users will be asked to register/create an account using a username and password for each account created in a database using an html/react-form
    - The password will be encrypted (probably using a node.js package called bcrypt.js)
    - The user data will be stored in a Mogodb database
      
  **Users can add a cover letter**
    - Users will copy and paste the text from the cover letter they want to add to their account into a text area 
    - The user can then click ‘save’ to save the pasted content, which retrieves the input element associated with the ‘Paste cover letter here’ label in an html form, and stores it in a global ‘cover letter’ 
      variable. The text content in the ‘cover letter’ variable is then rendered in the text area representing the user’s current cover letter.


## Utilized Technology
1. In our project, HTML lays the groundwork for the web page structures, while JavaScript within React components adds dynamic functionality that outperforms other technologies in terms of responsiveness. While we intially styled with traditional CSS in the beginning, we opted to incorporate Material-UI (MUI) which has greatly improved the user interface and design. The pre-built components and theming capabilities of MUI allowed out team to quickly develop a visually attractive and consistent user experience.
2. React and Redux play a fundamental role to our application's front-end develpopment and state management. One of the defining features about React is the Virtual DOM which bypasses the need for manipulating the browser's DOM. The lightweight copy (Virtual DOM) minimizes re-renders and improves efficiency. Redux provides a centralized data store making it easier to track, manage and update our documents across various components.
3. Express plays a pivitol role in our backend framework, allowing for easy setup of API endpoints to handle various requests such as GET, POST, PUT and DELETE. In addition, Express is also capable of handling multiple requests simultaneously and provides meaningful responses in case of failures, which has made debugging a lot simpler. Lastly, seamless intergration with Redux Thunks allows for smooth communication between the front-end and back-end.
4. For database storage, we chose to use MongoDB due to its flexibility and scalability in storing and managing user data. Its schema-less architecture allows us to accomodate complex data structures easily. Furthermore, MongoDB enhances our app's efficiency by providing fast data retrieval and processing capabilities, ensuring a seamless user experience and enabling us to handle large volumes of data with ease.
5. Our application is currently being hosted through AWS EC2, an industry-standard platform known for its robustness and scalability in web services hosting which doesn't spin down despite inactivity. We made use of security groups to block requests from different ip-addresses and ports, enhancing the security of our application. Later, we integrated a Route 53 custom domain to give our application a user-friendly domain name.


## Above and Beyond
For our MERN application, we went above and beyond the standard requirements by implementing several key features that enhance user experience and security. For starters, we incorporated Google Login, allowing for users to sign up and log in through a provider they are likely familiar with. In addition, Google offers a quick and secure authentication method ensuring our user's data is both safe and protected. 

Moreover, we incorporated JWT (JSON Web Token) authentication to further safeguard user data. JWTs also allows users to refresh their pages without the hassle of signing back in, providing a seamless and convenient user experience. 

For users who prefer to sign up directly through our application instead of using Google, we implemented bcrypt, a cryptographic algorithm specifically designed for hashing and storing passwords securely. This ensures user data is kept safe, regardless of the method chosen.

By incorporating Google Login, JWT authentication and bcrypt, we have created an application that prioritizes both security and user convenience. This ensures that users have flexible authentication options that cater to their desired preferences while also maintaing high security standards.

In addition, we used libraries such as docx and mammoth to allow users to customize the font style, size, and margins in their tailored document, and directly download them onto their device. By incorporating these libraries, we further streamlined the tailoring process and increased efficiency.
## What's Next
Moving forward, we plan to incorporate a web scraping feature that allows users to submit links to job postings, enabling the application to automatically extract all relevant information. This functionality will streamline the process of adding job details, making it easier for users to manage and apply to various jobs. Our goal has always been to alleviate the mental and physical burdens associated with job searching, and incorporating a web scraper brings us one step closer to achieving this objective.
  
  
## Contributions of Team Members

### Silvana
one sentence about you!
### Vishal
Worked mainly on the main dashboard of the application for features like adding a job, deleting a job, searching a job by title and company name, adding tags for a job and filtering the jobs by tags. Also worked on the UI overhaul for the main dashboard. Contributed to the stretch requirement that allowed user to upload PDFs for the resume and cover letter. Helped in polishing of the code and removing commented out code from the project and also assisted the team with deployment related issues
### Kurtis
I focused on enhancing user account functionality by implementing secure account creation and editing features. I used bcrypt to hash and secure user passwords, ensuring that sensitive information was well-protected. I also worked on endpoint routing to streamline user interactions within the application. Additionally, I integrated Google authentication, providing users with a convenient and secure login option using their Google accounts. To manage user data effectively, I designed a comprehensive user schema model for MongoDB, which organized and stored user information efficiently. To ensure a seamless user experience, I incorporated JSON Web Tokens (JWT) for authentication, allowing user data to persist even after refreshing the web application. 
### Kevin

I focused on the cover letter page by implementing document addition/deletion and tailoring functionality. I achieved this by
using react/redux for the frontend and express for the backend, both of which were later refactored by Silvana and Kurtis for better readability. In addition, 
I integrated the OpenAI API, which leveraged LLMs to determine which parts of the selected resume were relevent to the job posting, and
formatted it according to the provided cover letter. Additionally, I worked with the docx and mammoth library to allow .docx uploads and produce .docx documents
where users could specify the font size, style, and page margins of each document. Lastly, I deployed the project frontend on AWS Amplify, and 
the backend on an http AWS EC2 instance, secured to https through ELB and AWS SSL/TLS certificates, and used a custom domain through Route 53.


## Images

{You should use this area to add a screenshot of your app or website }

<img src ="images/test.png" width="100px">

## References

{Add your stuff here}

- Took help from stackoverflow to understand how to use regex in mongoose. Link: https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
    



