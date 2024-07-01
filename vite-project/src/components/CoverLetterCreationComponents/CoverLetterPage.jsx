import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/CoverLetterCreation.css';
import AddDocument from './AddDocument.jsx';
import ViewRemoveDocument from './ViewRemoveDocument.jsx'
import coverLetterTemplate from '../../assets/coverLetterTemplate.json';
import TailorCoverLetter from './TailorCoverLetter.jsx';
import { getJobPostingsAsync } from '../../redux/jobPostings/thunk.js';
import { getCoverLetterTemplatesAsync, getCoverLettersAsync } from '../../redux/coverLetters/thunk.js';


export default function CoverLetterPage({ userResumes, userCoverLetters }) {
    const [memory, setMemory] = useState({
        resumes: userResumes,
        // coverLetters: userCoverLetters,
        //jobPostings: userJobPostings,
        tailoredCoverLetters: [],
        // coverLetterTemplate: coverLetterTemplate.templates
    });

    const jobPostings = useSelector(state => state.jobPostingList.jobPostings);
    const coverLetters = useSelector(state => state.coverLetterList.coverLetters);
    const coverLetterTemplates = useSelector(state => state.coverLetterList.coverLetterTemplates);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobPostingsAsync());
        dispatch(getCoverLetterTemplatesAsync());
        dispatch(getCoverLettersAsync());
    }, []);

    // console.log("job postings:" + jobPostings);
    // console.log("initial cover letters: " + coverLetters);
    // console.log("cover letter templates: " + coverLetterTemplates);


    return(
        <div className="coverLetterPageContainer">
            <div>
                <h1 className="largerLetters">Generate Cover Letter</h1>
            </div>
            <AddDocument setMemory={setMemory} 
                         memory={memory}
                         jobPostings={jobPostings} 
                         coverLetters={coverLetters} 
                         coverLetterTemplates={coverLetterTemplates}>
            </AddDocument>
            <ViewRemoveDocument setMemory={setMemory} 
                                memory={memory} 
                                jobPostings={jobPostings}
                                coverLetters={coverLetters}>
            </ViewRemoveDocument>
            <TailorCoverLetter setMemory={setMemory} 
                                memory={memory} 
                                jobPostings={jobPostings}
                                coverLetters={coverLetters}>
            </TailorCoverLetter>
        </div>
    )
   
}
