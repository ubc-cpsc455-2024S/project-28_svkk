import React, {useState} from 'react';
import '../../styles/CoverLetterCreation.css';
import WhitePageDisplay from "./WhitePageDisplay.jsx";
import DropdownSelector from "./DropdownSelector.jsx";
import {addTailoredCoverLettersAsync} from "../../redux/tailoredCoverLetters/thunk.js";
import {useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


export default function TailorCoverLetter({ resumes, jobPostings, coverLetters }) {

    const [elementTitleBox, setElementTitleBox] = useState("");
    const [elementTextBox, setElementTextBox] = useState("");
    const [response, setResponse] = useState("Welcome! This is the confirmation box.");
    const [selectedElement, setSelectedElement] = useState(null);


    // For sending the request (Should be HTTP request but just sending locally for now
    const [apiResume, setAPIResume] = useState("");
    const [apiCoverLetter, setAPICoverLetter] = useState("");
    const [apiJobDescription, setAPIJobDescription] = useState("");
    const [additionalRequests, setAdditionalRequests] = useState("");
    const [apiResponse, setAPIResponse] = useState("");
    const [apiTitle, setAPITitle] = useState("");
    const [apiSaveResponse, setAPISaveResponse] = useState("");
    const email = useSelector(state => state.userEmail.userEmail);

    const dispatch = useDispatch();

    // ===== Tailoring Cover Letter Portion =====
    function saveTailoredCoverLetter() {
        const elementObject = {
            uuid: uuidv4(),
            name: apiTitle,
            content: apiResponse
        };
        if (uniqueName(coverLetters,apiTitle)) {
            dispatch(addTailoredCoverLettersAsync({email: email, coverLetter: elementObject}));
            setAPISaveResponse(`Tailored Cover Letter "${apiTitle}" has been successfully added!`);
        } else {
            setAPISaveResponse(`A Tailored Cover Letter with name "${apiTitle}" already exists, please use another name!`);
        }
        printState();
    }

    // ===== API Call (To be replaced by HTTP request to backend =====

    function sendFullTailorRequest() {
        let resume = findElement(resumes, apiResume).content;
        let cover_letter = findElement(coverLetters, apiCoverLetter).content;
        let job_posting = findElement(jobPostings, apiJobDescription).content;
        let additional_requests = additionalRequests;
        const apiKey = import.meta.env.VITE_API_KEY;

        console.log(generateGPTRequestString(resume,cover_letter,job_posting, additional_requests));
        console.log('apiKey is:', apiKey);

        // Referenced from Chat-GPT Postman API Documentation
        let myHeaders = new Headers();
        // Body of the request sent is in json format
        myHeaders.append("Content-Type", "application/json");
        // Media types accepted are in json format
        myHeaders.append("Accept", "application/json");
        // This is my authorization token for my account
        myHeaders.append("Authorization", apiKey);

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
            addType: "Tailored Cover Letter",
            // removeType: removeType,
            elementTitleBox: elementTitleBox,
            elementTextBox: elementTextBox,
            response: response,
            selectedElement: selectedElement
        }
        console.log(state);
    }


    // ====== Display ======
    return (
        <>
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
                    <DropdownSelector allElements={[{name: "None", content: "None"},...resumes]} setSelectedElement={setAPIResume} />
                    <DropdownSelector allElements={[{name: "None", content: "None"},...coverLetters]} setSelectedElement={setAPICoverLetter} />
                    <DropdownSelector allElements={[{name: "None", content: "None"},...jobPostings]} setSelectedElement={setAPIJobDescription} />
                </div>
                <br></br><br></br>


                <button className="add_button" onClick={sendFullTailorRequest}>Tailor my Cover Letter!</button>
                <br></br><br></br>

                <button className="add_button" onClick={saveTailoredCoverLetter}>Save my tailored Cover Letter!</button>
                <WhitePageDisplay displayText={apiSaveResponse} />
                <WhitePageDisplay displayText={apiResponse} />
                <br></br><br></br>

            </div>
        </>
    );
}