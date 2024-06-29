import React, {useEffect, useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import coverLetterTemplate from '../../assets/coverLetterTemplate.json';

export default function AddDocument({ setMemory, memory }) {

    // Strings for use in helpers
    const resumeString = "Resume";
    const coverLetterString = "Cover Letter";
    const jobPostingString = "Job Posting";
    const tailoredCoverLetterString = "Tailored Cover Letter";
    const coverLetterTemplateString = "Cover Letter Template";

    const [addType, setAddType] = useState(resumeString);
    const [elementTitleBox, setElementTitleBox] = useState("");
    const [elementTextBox, setElementTextBox] = useState("");
    const [templateIndex, setTemplateIndex] = useState(0);
    const [response, setResponse] = useState("Welcome! This is the confirmation box.");

    const optionsAdd = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString },
        {name: tailoredCoverLetterString}, {name: coverLetterTemplateString}];

    useEffect(() => {
        // setting template based on index
        if (addType === coverLetterTemplateString && memory.coverLetterTemplate.length >= 0) {
            setElementTextBox(memory.coverLetterTemplate[templateIndex].content);
        }
    }, [addType, memory.coverLetterTemplate, templateIndex]);


    // ===== Add Element Section =====
    function addElement() {

        const elementObject = {
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
            if (uniqueName(memory.resumes, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    resumes: [...prevMemory.resumes, elementObject]
                }));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === coverLetterString) {
            if (uniqueName(memory.coverLetters, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    coverLetters: [...prevMemory.coverLetters, elementObject]
                }));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        } else if (typeToAdd === jobPostingString) {
            if (uniqueName(memory.jobPostings, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    jobPostings: [...prevMemory.jobPostings, elementObject]
                }));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }

        } else if (typeToAdd === tailoredCoverLetterString) {
            if (uniqueName(memory.jobPostings, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    tailoredCoverLetters: [...prevMemory.tailoredCoverLetters, elementObject]
                }));
                setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
            }
        // treating template as regular cover letter type
        } else if (typeToAdd === coverLetterTemplateString) {
            setAddType(coverLetterString);
            console.log(`elementTitleBox value is ${elementTitleBox}`); // this isn't printing to the console,
            // can still add a document without a title :(
            if (elementTitleBox !== "") {
                if (uniqueName(memory.coverLetters, elementTitleBox)) {
                    setMemory(prevMemory => ({
                        ...prevMemory,
                        coverLetters: [...prevMemory.coverLetters, elementObject]
                    }));
                    setResponse(`${typeToAdd} "${elementTitleBox}" has been successfully added!`);
                    
                } else {
                    setResponse(`A ${typeToAdd} with name "${elementTitleBox}" already exists, please use another name!`);
                }
            } else {
                setResponse(`Please enter a name for your new ${typeToAdd}`);
            }
        }
        printState();

    }


    // ====== Helpers ======
    function prevTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex - 1 + memory.coverLetterTemplate.length) % memory.coverLetterTemplate.length);
    }

    function nextTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex + 1 + memory.coverLetterTemplate.length) % memory.coverLetterTemplate.length);
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
            memory: memory,
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