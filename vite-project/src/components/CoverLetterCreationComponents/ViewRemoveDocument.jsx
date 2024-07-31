import React, {useEffect, useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import {useDispatch, useSelector} from 'react-redux';
import { deleteJobPostingAsync } from '../../redux/jobPostings/thunk.js';
import { deleteCoverLetterAsync } from '../../redux/coverLetters/thunk.js';
import {deleteTailoredCoverLetterAsync} from "../../redux/tailoredCoverLetters/thunk.js";
import {deleteResumesAsync} from "../../redux/resumes/thunk.js";
import DownloadDocx from "./DownloadDocx.jsx";

export default function ViewRemoveDocument({ resumes, jobPostings, coverLetters, tailoredCoverLetters}) {
    const dispatch = useDispatch();

    // Strings for use in helpers
    const resumeString = "Resume";
    const coverLetterString = "Cover Letter";
    const jobPostingString = "Job Posting";
    const tailoredCoverLetterString = "Tailored Cover Letter";

    const [removeType, setRemoveType] = useState(resumeString);
    const [selectedElement, setSelectedElement] = useState(null);
    const email = useSelector(state => state.userEmail.userEmail);

    const options = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString },
        { name: tailoredCoverLetterString }];

    // ===== Viewing and Removing =====
    function findSelectedElement() {
        if (removeType === resumeString) {
            let result = findElement(resumes,selectedElement);
            if (result === -1) {
                if (resumes.length > 0) {
                    setSelectedElement(resumes[0].name);
                    return resumes[0];
                }
            } else {
                return result;
            }
        } else if (removeType === coverLetterString) {
            let result = findElement(coverLetters,selectedElement);
            if (result === -1) {
                if (coverLetters.length > 0) {
                    setSelectedElement(coverLetters[0].name);
                    return coverLetters[0];
                }
            } else {
                return result;
            }
        } else if (removeType === jobPostingString) {
            // console.log("initial job postings list in viewremove documents component:");
            // console.log(jobPostings);
            let result = findElement(jobPostings,selectedElement);
            if (result === -1) {
                if (jobPostings.length > 0) {
                    setSelectedElement(jobPostings[0].name);
                    return jobPostings[0];
                }
            } else {
                return result;
            }
        } else if (removeType === tailoredCoverLetterString) {
            let result = findElement(tailoredCoverLetters,selectedElement);
            // console.log("the name is: ", selectedElement);
            if (result === -1) {
                if (tailoredCoverLetters.length > 0) {
                    setSelectedElement(tailoredCoverLetters[0].name);
                    return tailoredCoverLetters[0];
                }
            } else {
                return result;
            }
        }

        return {name:"Not found", content: "Please pick a document to view!"}
    }

    function removeElement() {
        if (removeType === resumeString) {
            dispatch(deleteResumesAsync({email: email, name: selectedElement}))
        } else if (removeType === coverLetterString) {
            dispatch(deleteCoverLetterAsync({email: email, name:selectedElement}));
        } else if (removeType === jobPostingString) {
            dispatch(deleteJobPostingAsync({email: email, name: selectedElement}));
        } else if (removeType === tailoredCoverLetterString) {
            dispatch(deleteTailoredCoverLetterAsync({email:email, name: selectedElement}));
        }
        // printState();

    }

    // ===== Helpers =====
    function selectList() {
        if (removeType === resumeString) {
            return resumes;
        } else if (removeType === coverLetterString) {
            return coverLetters;
        } else if (removeType === jobPostingString) {
            return jobPostings;
        } else if (removeType === tailoredCoverLetterString) {
            // console.log("remove type: ", removeType);
            return tailoredCoverLetters;
        }
        return [];
    }

    function findElement(array, name) {

        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                return array[i];
            }
        }
        return -1;
    }

    function printState() {
        let state = {
            removeType: removeType,
            elementTitleBox: elementTitleBox,
            elementTextBox: elementTextBox,
            response: response,
            selectedElement: selectedElement
        }
        console.log(state);
    }


    // ====== Display ======
    return(
        <>
            {/* Viewing and Deleting Card */}
            <div className="big_card">
                <h3 className="largeLetters">View or Remove Existing Documents</h3>

                <br></br><br></br>

                <div className="button-holder">
                    <DropdownSelector
                        allElements={options}
                        setSelectedElement={setRemoveType}
                    />
                    <DropdownSelector
                        allElements={selectList()}
                        setSelectedElement={setSelectedElement}
                    />
                </div>

                <br></br><br></br>

                <WhitePageDisplay
                    displayText={findSelectedElement().content}
                />
                <br></br><br></br>
                <DownloadDocx text={findSelectedElement().content} name={findSelectedElement().name} />

                <br></br><br></br>

                <button
                    className="remove_button"
                    onClick={removeElement}>
                    Remove Document
                </button>


            </div>
        </>
    );




}