import React, {useEffect, useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import AddDocument from './AddDocument.jsx';
import ViewRemoveDocument from './ViewRemoveDocument.jsx'
import coverLetterTemplate from '../../assets/coverLetterTemplate.json';
import TailorCoverLetter from './TailorCoverLetter.jsx';

export default function CoverLetterPage({ userResumes, userCoverLetters, userJobPostings }) {
    const [memory, setMemory] = useState({
        resumes: userResumes,
        coverLetters: userCoverLetters,
        jobPostings: userJobPostings,
        tailoredCoverLetters: [],
        coverLetterTemplate: coverLetterTemplate.templates
    });

    return(
        <div className="coverLetterPageContainer">
            <div>
                <h1 className="largerLetters">Generate Cover Letter</h1>
            </div>
            <AddDocument setMemory={setMemory} memory={memory}></AddDocument>
            <ViewRemoveDocument setMemory={setMemory} memory={memory}></ViewRemoveDocument>
            <TailorCoverLetter setMemory={setMemory} memory={memory}></TailorCoverLetter>
        </div>
    )
   
}
