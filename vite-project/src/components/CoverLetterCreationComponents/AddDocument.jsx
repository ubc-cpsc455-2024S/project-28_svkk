import React, {useEffect, useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { addJobPostingAsync } from '../../redux/jobPostings/thunk.js';
import { addCoverLetterAsync } from '../../redux/coverLetters/thunk.js';
import { v4 as uuidv4 } from 'uuid';
import {addResumeAsync} from "../../redux/resumes/thunk.js";

export default function AddDocument({ resumes, jobPostings, coverLetters, coverLetterTemplates }) {
    const dispatch = useDispatch();

    // Strings for use in helpers
    const resumeString = "Resume";
    const coverLetterString = "Cover Letter";
    const jobPostingString = "Job Posting";
    const coverLetterTemplateString = "Cover Letter Template";

    const [addType, setAddType] = useState(resumeString);
    const [elementTitleBox, setElementTitleBox] = useState("");
    const [elementTextBox, setElementTextBox] = useState("");
    const [templateIndex, setTemplateIndex] = useState(0);
    const [response, setResponse] = useState("Welcome! This is the confirmation box.");

    const optionsAdd = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString }, {name: coverLetterTemplateString}];

    useEffect(() => {
        // setting template based on index
        if (addType === coverLetterTemplateString && coverLetterTemplates.length >= 0) {
            setElementTextBox(coverLetterTemplates[templateIndex].content);
        }
    }, [addType, coverLetterTemplates, templateIndex]);


    // ===== Add Element Section =====
    function addElement() {

        const elementObject = {
            uuid: uuidv4(),
            name: elementTitleBox,
            content: elementTextBox
        };

        let typeToAdd = addType;

        if (addType === coverLetterTemplateString) {
            typeToAdd = coverLetterString;
            setAddType(coverLetterString);
        }


        // console.log(addType);
        if (typeToAdd === resumeString) {
            if (uniqueName(resumes, elementTitleBox)) {
                console.log("dispatching add resume request");
                dispatch(addResumeAsync(elementObject));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);

            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === coverLetterString) {
            if (uniqueName(coverLetters, elementTitleBox)) {
                console.log("dispatching add cover letter request");
                dispatch(addCoverLetterAsync(elementObject));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === jobPostingString) {
            if (uniqueName(jobPostings, elementTitleBox)) {
                dispatch(addJobPostingAsync(elementObject));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        }


        // treating template as regular cover letter type
        else if (typeToAdd === coverLetterTemplateString) {
            setAddType(coverLetterString);
            console.log(`elementTitleBox value is ${elementTitleBox}`); // this isn't printing to the console,
            // can still add a document without a title :(
            if (elementTitleBox !== "") {
                if (uniqueName(coverLetters, elementTitleBox)) {
                    console.log("dispatching add cover letter from template request");
                    dispatch(addCoverLetterAsync(elementObject));
                    setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                    
                } else {
                    setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
                }
            } else {
                setResponse(`Please enter a name for your new ${typeToAdd}`);
            }
        }
        // printState();

    }


    // ====== Helpers ======
    function prevTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex - 1 + coverLetterTemplates.length) % coverLetterTemplates.length);
    }

    function nextTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex + 1 + coverLetterTemplates.length) % coverLetterTemplates.length);
    }

    function uniqueName(array, name) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                return false;
            }
        }
        return true;
    }

    function printState() {
        let state = {
            addType: addType,
            elementTitleBox: elementTitleBox,
            elementTextBox: elementTextBox,
            response: response,
        }
        console.log(state);
    }


    // ====== Display ======
    return(
        
            <>
            {/*Adding Card*/}

            <div className="big_card">
                <h3 className="largeLetters">Add a Document</h3>
                <br></br><br></br>

                <input
                    className="rounded-textbox"
                    placeholder="Document name"
                    onChange={(eventObject) => setElementTitleBox(eventObject.target.value)}
                />
                <br></br>
                <br></br>

                <textarea
                    className="big-rounded-textbox"
                    placeholder="Enter your Resume, Cover Letter, or Job Posting here."
                    onChange={(eventObject) => setElementTextBox(eventObject.target.value)}
                    value={elementTextBox}
                />
                {addType == coverLetterTemplateString && (
                    <div className="template-navigation">
                        <button className="template-button" onClick={prevTemplate}>Previous Template</button>
                        {templateIndex + 1}
                        <button className="template-button" onClick={nextTemplate}>Next Template</button>
                    </div>
                )}

                <br></br>
                <br></br>

                <DropdownSelector allElements={optionsAdd} setSelectedElement={setAddType} />
                <br></br><br></br>
                <WhitePageDisplay displayText={response} />
                <br></br><br></br>

                <button className="add_button" onClick={addElement}>Add Document</button>

            </div>
            </>
    
    );
}