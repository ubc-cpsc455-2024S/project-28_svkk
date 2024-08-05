import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/CoverLetterCreation.css';
import AddDocument from './AddDocument.jsx';
import ViewRemoveDocument from './ViewRemoveDocument.jsx'
import TailorCoverLetter from './TailorCoverLetter.jsx';
import { getJobPostingsAsync } from '../../redux/jobPostings/thunk.js';
import { getCoverLetterTemplatesAsync, getCoverLettersAsync } from '../../redux/coverLetters/thunk.js';
import {getTailoredCoverLettersAsync} from "../../redux/tailoredCoverLetters/thunk.js";
import {getResumesAsync} from "../../redux/resumes/thunk.js";
import {jwtDecode} from "jwt-decode";
import {setUserEmail} from "../../redux/userEmail/UserEmailReducer.js";
import Navbar from '../JobsDashboard/Navbar.jsx'


export default function CoverLetterPage() {

    const jobPostings = useSelector(state => state.jobPostingList.jobPostings);
    const coverLetters = useSelector(state => state.coverLetterList.coverLetters);
    const coverLetterTemplates = useSelector(state => state.coverLetterList.coverLetterTemplates);
    const tailoredCoverLetters = useSelector(state => state.tailoredCoverLetterList.tailoredCoverLetters);
    const resumes = useSelector(state => state.resumeList.resumes);
    const email = useSelector(state => state.userEmail.userEmail);

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        try {
            const decoded = jwtDecode(token);
            if (decoded && new Date(decoded.exp * 1000) > new Date()) {
                dispatch(setUserEmail(decoded.email));
                dispatch(getCoverLetterTemplatesAsync());
                dispatch(getJobPostingsAsync({email: email}));
                dispatch(getResumesAsync({email: email}));
                dispatch(getCoverLettersAsync({email: email}));
                dispatch(getTailoredCoverLettersAsync({email: email}))
            } else {
                console.log("expired token");
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userEmail');
            }
        } catch (error) {
            console.error('Failed to decode JWT:', error);
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userEmail');
        }

    }, [email, dispatch]);

    return(
        <>
        <Navbar search={false}/>
        <div className="coverLetterPageContainer">
            <div>
                <h1 className="largerLetters">Generate Cover Letter</h1>
            </div>
            <AddDocument
                resumes = {resumes}
                jobPostings={jobPostings}
                coverLetters={coverLetters}
                coverLetterTemplates={coverLetterTemplates}>
            </AddDocument>
            <ViewRemoveDocument
                resumes = {resumes}
                jobPostings={jobPostings}
                coverLetters={coverLetters}
                tailoredCoverLetters={tailoredCoverLetters}>
            </ViewRemoveDocument>
            <TailorCoverLetter
                resumes = {resumes}
                jobPostings={jobPostings}
                coverLetters={coverLetters}>
            </TailorCoverLetter>
        </div>
        </>
    )

}