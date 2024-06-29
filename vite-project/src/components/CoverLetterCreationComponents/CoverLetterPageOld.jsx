import React, {useEffect, useState} from 'react';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import '../../styles/CoverLetterCreation.css';
import coverLetterTemplate from '../../assets/coverLetterTemplate.json';
import AddDocument from './AddDocument.jsx';

export default function CoverLetterPage({ userResumes, userCoverLetters, userJobPostings }) {

    // Main Storage to be replaced with redux
    const [memory, setMemory] = useState({
        resumes: userResumes,
        coverLetters: userCoverLetters,
        jobPostings: userJobPostings,
        tailoredCoverLetters: [],
        coverLetterTemplate: coverLetterTemplate.templates
    });

    // Strings for use in helpers
    const resumeString = "Resume";
    const coverLetterString = "Cover Letter";
    const jobPostingString = "Job Posting";
    const tailoredCoverLetterString = "Tailored Cover Letter";
    const coverLetterTemplateString = "Cover Letter Template"

    const [addType, setAddType] = useState(resumeString);
    const [removeType, setRemoveType] = useState(resumeString);
    const [elementTitleBox, setElementTitleBox] = useState("");
    const [elementTextBox, setElementTextBox] = useState("");
    const [response, setResponse] = useState("Welcome! This is the confirmation box.");
    const [selectedElement, setSelectedElement] = useState(null);
    const [templateIndex, setTemplateIndex] = useState(0);

    const options = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString },
        {name: tailoredCoverLetterString}];

    const optionsAdd = [{ name: resumeString }, { name: coverLetterString }, { name: jobPostingString },
        {name: tailoredCoverLetterString}, {name: coverLetterTemplateString}];

    useEffect(() => {
        // setting template based on index
        if (addType === coverLetterTemplateString && memory.coverLetterTemplate.length >= 0) {
            setElementTextBox(memory.coverLetterTemplate[templateIndex].content);
        }
    }, [addType, memory.coverLetterTemplate, templateIndex]);

    // For sending the request (Should be HTTP request but just sending locally for now
    const [apiResume, setAPIResume] = useState("");
    const [apiCoverLetter, setAPICoverLetter] = useState("");
    const [apiJobDescription, setAPIJobDescription] = useState("");
    const [additionalRequests, setAdditionalRequests] = useState("");
    const [apiResponse, setAPIResponse] = useState("");
    const [apiTitle, setAPITitle] = useState("");
    const [apiSaveResponse, setAPISaveResponse] = useState("");


    // ===== Viewing and Removing =====
    function findSelectedElement() {
        if (removeType === resumeString) {
            let result = findElement(memory.resumes,selectedElement);
            if (result === -1) {
                if (memory.resumes.length > 0) {
                    setSelectedElement(memory.resumes[0].name);
                    return memory.resumes[0];
                }
            } else {
                return result;
            }
        } else if (removeType === coverLetterString) {
            let result = findElement(memory.coverLetters,selectedElement);
            if (result === -1) {
                if (memory.coverLetters.length > 0) {
                    setSelectedElement(memory.coverLetters[0].name);
                    return memory.coverLetters[0];
                }
            } else {
                return result;
            }
        } else if (removeType === jobPostingString) {
            let result = findElement(memory.jobPostings,selectedElement);
            if (result === -1) {
                if (memory.jobPostings.length > 0) {
                    setSelectedElement(memory.jobPostings[0].name);
                    return memory.jobPostings[0];
                }
            } else {
                return result;
            }
        } else if (removeType === tailoredCoverLetterString) {
            let result = findElement(memory.tailoredCoverLetters,selectedElement);
            if (result === -1) {
                if (memory.tailoredCoverLetters.length > 0) {
                    setSelectedElement(memory.tailoredCoverLetters[0].name);
                    return memory.tailoredCoverLetters[0];
                }
            } else {
                return result;
            }
        }

        return {name:"Not found", content: "Please pick a document to view!"}
    }

    function removeElement() {
        if (removeType === resumeString) {
            setMemory(prevMemory => ({
                ...prevMemory,
                resumes: prevMemory.resumes.filter(
                    element => element.name !== selectedElement
                )
            }));
        } else if (removeType === coverLetterString) {
            setMemory(prevMemory => ({
                ...prevMemory,
                coverLetters: prevMemory.coverLetters.filter(
                    element => element.name !== selectedElement
                )
            }));
        } else if (removeType === jobPostingString) {
            setMemory(prevMemory => ({
                ...prevMemory,
                jobPostings: prevMemory.jobPostings.filter(
                    element => element.name !== selectedElement
                )
            }));
        } else if (removeType === tailoredCoverLetterString) {
            setMemory(prevMemory => ({
                ...prevMemory,
                tailoredCoverLetters: prevMemory.tailoredCoverLetters.filter(
                    element => element.name !== selectedElement
                )
            }));
        }
        printState();
    }

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
                setResponse(`${typeToAdd} ${elementTitleBox} has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name ${elementTitleBox} already exists! Please use another name!`);
            }
        } else if (typeToAdd === coverLetterString) {
            if (uniqueName(memory.coverLetters, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    coverLetters: [...prevMemory.coverLetters, elementObject]
                }));
                setResponse(`${typeToAdd} ${elementTitleBox} has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name ${elementTitleBox} already exists! Please use another name!`);
            }
        } else if (typeToAdd === jobPostingString) {
            if (uniqueName(memory.jobPostings, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    jobPostings: [...prevMemory.jobPostings, elementObject]
                }));
                setResponse(`${typeToAdd} ${elementTitleBox} has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name ${elementTitleBox} already exists! Please use another name!`);
            }

        } else if (typeToAdd === tailoredCoverLetterString) {
            if (uniqueName(memory.jobPostings, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    tailoredCoverLetters: [...prevMemory.tailoredCoverLetters, elementObject]
                }));
                setResponse(`${typeToAdd} ${elementTitleBox} has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name ${elementTitleBox} already exists! Please use another name!`);
            }
        // treating template as regular cover letter type
        } else if (typeToAdd === coverLetterTemplateString) {
            setAddType(coverLetterString);
            if (uniqueName(memory.coverLetters, elementTitleBox)) {
                setMemory(prevMemory => ({
                    ...prevMemory,
                    coverLetters: [...prevMemory.coverLetters, elementObject]
                }));
                setResponse(`${typeToAdd} ${elementTitleBox} has been successfully added!`);
            } else {
                setResponse(`A ${typeToAdd} with name ${elementTitleBox} already exists! Please use another name!`);
            }
        }
        printState();
    }


    // ===== Tailoring Cover Letter Portion =====
    function saveTailoredCoverLetter() {
        const elementObject = {
            name: apiTitle,
            content: apiResponse
        };
        if (uniqueName(memory.tailoredCoverLetters,apiTitle)) {
            setMemory(prevMemory => ({
                ...prevMemory,
                tailoredCoverLetters: [...prevMemory.tailoredCoverLetters, elementObject]
            }));
            setAPISaveResponse(`Tailored Cover Letter ${elementTitleBox} has been successfully added!`);
        } else {
            setAPISaveResponse(`A Tailored Cover Letter with name ${elementTitleBox} already exists! Please use another name!`);
        }
        printState();
    }

    // ===== Helpers =====
    function selectList() {
        if (removeType === resumeString) {
            return memory.resumes;
        } else if (removeType === coverLetterString) {
            return memory.coverLetters;
        } else if (removeType === jobPostingString) {
            return memory.jobPostings;
        } else if (removeType === tailoredCoverLetterString) {
            return memory.tailoredCoverLetters;
        }
        return [];
    }

    function findElement(array, name) {

        // if (!name || name.trim().length === 0) return -1;
        // console.log(name)

        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                return array[i];
            }
        }
        return -1;
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
            removeType: removeType,
            elementTitleBox: elementTitleBox,
            elementTextBox: elementTextBox,
            response: response,
            selectedElement: selectedElement
        }
        console.log(state);
    }

    function prevTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex - 1 + memory.coverLetterTemplate.length) % memory.coverLetterTemplate.length);
    }

    function nextTemplate() {
        setTemplateIndex((prevIndex) => (prevIndex + 1 + memory.coverLetterTemplate.length) % memory.coverLetterTemplate.length);
    }

    // ===== API Call (To be replaced by HTTP request to backend =====

    function sendFullTailorRequest() {
        let resume = findElement(memory.resumes, apiResume).content;
        let cover_letter = findElement(memory.coverLetters, apiCoverLetter).content;
        let job_posting = findElement(memory.jobPostings, apiJobDescription).content;
        let additional_requests = additionalRequests;

        console.log(generateGPTRequestString(resume,cover_letter,job_posting, additional_requests));

        // Referenced from Chat-GPT Postman API Documentation
        let myHeaders = new Headers();
        // Body of the request sent is in json format
        myHeaders.append("Content-Type", "application/json");
        // Media types accepted are in json format
        myHeaders.append("Accept", "application/json");
        // This is my authorization token for my account
        myHeaders.append("Authorization", "Bearer sk-proj-2gUnSpGlbiyUdBZ7LFMvT3BlbkFJ17KDuvY4x3mf7tiiKcom");

        // models we can replace it with for quality
        //gpt-4o
        //gpt-3.5-turbo
        let raw = JSON.stringify({
            "model": "gpt-4o",
            "messages": [
                {
                    "role": "user",
                    "content": generateGPTRequestString(resume,cover_letter,job_posting, additional_requests)
                }
            ]
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // Referenced from Chat-GPT Postman API documentation

        fetch("https://api.openai.com/v1/chat/completions", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let jsonObject = JSON.parse(result);
                let message = (jsonObject.choices[0].message.content);
                console.log(message);
                setAPIResponse(message);
            })
            .catch(error => console.log("This is an Error: ", error));
    }

    function generateGPTRequestString(resume, cover_letter, job_posting, additional_requests) {
        const today = new Date();
        const date = today.toLocaleDateString("en-US");
        return `Here is what I wrote. Please tailor it to the job application.
    
        Resume:
        
        ${resume}
        
        this is my cover letter:
        
        ${cover_letter}
        
        The skills above are the ONLY skills I posses. Do not say that I have skills that I did not mention above this line.
        
        Here is the job posting.
        
        ${job_posting}
        
        The resulting cover letter should have the same amount of words or characters as the original. Only put one tab to indent paragraphs.
        Please indent the start of each body paragraph with a tab. Today's date is ${date} and keep the same number of paragraphs as the reference cover letter. Please only provide the finished cover letter. No other input is needed.
        It is absolutely ESSENTIAL that the number of body paragraphs remains the same as in the cover letter I uploaded. If there are 4 paragraphs in the reference cover letter, you must only write 4 paragraphs.
        ${additional_requests}
        `;
    }

    // HTML visual portion of the component

    return (

        <div className="coverLetterPageContainer">
            <div>
                <h1 className="largerLetters">Generate Cover Letter</h1>

            </div>

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

                <button
                    className="remove_button"
                    onClick={removeElement}>
                    Remove Document
                </button>
            </div>


            {/* Tailoring Card*/}

            <div className="big_card">

                <h3 className="largeLetters">Tailor your Cover Letter!</h3>
                <br></br><br></br>

                <input
                    className="rounded-textbox"
                    placeholder="Document name"
                    onChange={(eventObject) => setAPITitle(eventObject.target.value)}
                />
                <br></br><br></br>

                <textarea
                    className="rounded-textbox"
                    placeholder="Please include any additional requests here."
                    onChange={(eventObject) => setAdditionalRequests(eventObject.target.value)}
                />
                <br></br><br></br>

                <div className="button-holder">
                    <DropdownSelector allElements={[{name: "None", content: "None"},...memory.resumes]} setSelectedElement={setAPIResume} />
                    <DropdownSelector allElements={[{name: "None", content: "None"},...memory.coverLetters]} setSelectedElement={setAPICoverLetter} />
                    <DropdownSelector allElements={[{name: "None", content: "None"},...memory.jobPostings]} setSelectedElement={setAPIJobDescription} />
                </div>
                <br></br><br></br>


                <button className="add_button" onClick={sendFullTailorRequest}>Tailor my Cover Letter!</button>
                <br></br><br></br>

                <button className="add_button" onClick={saveTailoredCoverLetter}>Save my tailored Cover Letter!</button>
                <WhitePageDisplay displayText={apiSaveResponse} />
                <WhitePageDisplay displayText={apiResponse} />
                <br></br><br></br>

            </div>

        </div>
    );
}
