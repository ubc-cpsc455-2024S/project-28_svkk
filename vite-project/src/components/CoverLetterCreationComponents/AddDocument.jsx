import React, {useEffect, useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import {useDispatch, useSelector} from 'react-redux';
import {addJobPostingAsync} from '../../redux/jobPostings/thunk.js';
import {addCoverLetterAsync} from '../../redux/coverLetters/thunk.js';
import {v4 as uuidv4} from 'uuid';
import {addResumeAsync} from "../../redux/resumes/thunk.js";
import UploadDocx from "./UploadDocx.jsx";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


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

    const email = useSelector(state => state.userEmail.userEmail);

    const optionsAdd = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString }, {name: coverLetterTemplateString}];

    useEffect(() => {
        // setting template based on index
        console.log('coverlettertemplate length', coverLetterTemplates.length)
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
                dispatch(addResumeAsync({email: email, resume: elementObject}));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                setElementTextBox("");
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === coverLetterString) {
            if (uniqueName(coverLetters, elementTitleBox)) {
                dispatch(addCoverLetterAsync({email: email, coverLetter: elementObject}));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                setElementTextBox("");
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === jobPostingString) {
            if (uniqueName(jobPostings, elementTitleBox)) {
                dispatch(addJobPostingAsync({email: email,jobPosting: elementObject}));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                setElementTextBox("");
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        }


        // treating template as regular cover letter type
        else if (typeToAdd === coverLetterTemplateString) {
            setAddType(coverLetterString);

            // can still add a document without a title :(
            if (elementTitleBox !== "") {
                if (uniqueName(coverLetters, elementTitleBox)) {
                    dispatch(addCoverLetterAsync({email: email, coverLetter: elementObject}));
                    setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                    setElementTextBox("");
                } else {
                    setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
                }
            } else {
                setResponse(`Please enter a name for your new ${typeToAdd}`);
            }
        }
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
            <div className="big_card add_card">
                <h3 className="largeLetters font-medium text-3xl">Add a Document</h3>
                <br></br>

                <div className="p-[30px] pb-4">
                    <div className=" relative">
                        <input
                            className="border p-2 pl-6 rounded-[30px]"
                            placeholder="Document name"
                            onChange={(eventObject) => setElementTitleBox(eventObject.target.value)}
                        />
                        <span className=" bg-white p-1 text-[11px] absolute left-[8.8rem] top-[-12px]">Document Name*</span>
                    </div> 
                </div>

                <div className="p-[30px] pb-4">
                    <div className=" relative">
                        <textarea
                            className="border p-2 pl-6 rounded-[30px] big-rounded-textbox"
                            placeholder="Enter your Resume, Cover Letter, or Job Posting here."
                            onChange={(eventObject) => setElementTextBox(eventObject.target.value)}
                            value={elementTextBox}/>
                    </div> 
                </div>

                {addType == coverLetterTemplateString && (
                    <div className="template-navigation">
                        <ArrowCircleLeftIcon fontSize="large" sx={{color: '#0C6F7B', '&:hover': {color: '#07606B'}}} onClick={prevTemplate}></ArrowCircleLeftIcon>
                        <span>{templateIndex + 1}</span>
                        <ArrowCircleRightIcon fontSize="large" sx={{color: '#0C6F7B', '&:hover': {color: '#07606B'}}} onClick={nextTemplate}></ArrowCircleRightIcon>
                    </div>
                )}

                <br></br>
                <br></br>

                <DropdownSelector allElements={optionsAdd} setSelectedElement={setAddType} />
                <br></br><br></br>
                <WhitePageDisplay displayText={response} />
                <br></br><br></br>

                <UploadDocx setResponse={setElementTextBox}></UploadDocx>
                <br></br><br></br>
                <button className="add_button bg-green hover:bg-greenHover" onClick={addElement}>Add Document</button>

            </div>
            </>

    );
}