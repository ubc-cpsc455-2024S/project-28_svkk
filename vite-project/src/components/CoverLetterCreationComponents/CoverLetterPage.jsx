import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/CoverLetterCreation.css';
import AddDocument from './AddDocument.jsx';
import ViewRemoveDocument from './ViewRemoveDocument.jsx'
import TailorCoverLetter from './TailorCoverLetter.jsx';
import { getJobPostingsAsync } from '../../redux/jobPostings/thunk.js';
import { getCoverLetterTemplatesAsync, getCoverLettersAsync } from '../../redux/coverLetters/thunk.js';
import {getTailoredCoverLettersAsync} from "../../redux/tailoredCoverLetters/thunk.js";


export default function CoverLetterPage({ userResumes }) {
    const [memory, setMemory] = useState({
        resumes: userResumes,
        // coverLetters: userCoverLetters,
        //jobPostings: userJobPostings,
        // tailoredCoverLetters: [],
        // coverLetterTemplate: coverLetterTemplate.templates
    });

    const jobPostings = useSelector(state => state.jobPostingList.jobPostings);
    const coverLetters = useSelector(state => state.coverLetterList.coverLetters);
    const coverLetterTemplates = useSelector(state => state.coverLetterList.coverLetterTemplates);
    const tailoredCoverLetters = useSelector(state => state.tailoredCoverLetterList.tailoredCoverLetters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobPostingsAsync());
        dispatch(getCoverLetterTemplatesAsync());
        dispatch(getCoverLettersAsync());
        dispatch(getTailoredCoverLettersAsync());
    }, [dispatch]);

    // console.log("job postings:" + jobPostings);
    // console.log("initial cover letters: " + coverLetters);
    // console.log("cover letter templates: " + coverLetterTemplates);

    // console.log(tailoredCoverLetters);


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
                                coverLetters={coverLetters}
                                tailoredCoverLetters={tailoredCoverLetters}>
            </ViewRemoveDocument>
            <TailorCoverLetter setMemory={setMemory}
                                memory={memory}
                                jobPostings={jobPostings}
                                coverLetters={coverLetters}>
            </TailorCoverLetter>
        </div>
    )

}
