import mammoth from "mammoth";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {USED_IP} from "../../redux/ip.js";

// From MUI Documentation https://mui.com/material-ui/react-button/
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UploadDocx({ setResponse }) {

    const [fileName, setFileName] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            const formattedText = await readDocx(file);
            setResponse(formattedText);
        }
    };

    // Code written on 31st July 2024 with the help of stackoverflow post https://stackoverflow.com/questions/52140939/how-to-send-pdf-file-from-front-end-to-nodejs-server
    const handlePDFUpload = async (e) => {
        const file = e.target.files[0]

        var formData = new FormData()
        formData.append('file', file)
        let result = await fetch(USED_IP + "resumes/uploadPDF",
            {
                method: 'POST',
                body: formData
            }
        )
        const data = await result.json()
        setResponse(data.data);

    }

    function readFileAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    // Use mammoth to extract HTML and then convert to strings with the \n and \t formatting.
    async function readDocx(file) {
        const arrayBuffer = await readFileAsArrayBuffer(file);
        const result = await mammoth.convertToHtml({arrayBuffer});
        const htmlString = result.value;
        return convertHtmlToFormattedText(htmlString);
    }

    function convertHtmlToFormattedText(htmlString) {
        let text = htmlString;

        // Replace <p> and <br> with \n
        // Replace <strong> with **

        // <p> open and close tag
        text = text.replace(/<p>/g, '\n')
        text = text.replace(/<\/p>/g, '\n')

        // <br \> tag (not open and close tag for this library)
        text = text.replace(/<br \/>/g, '\n');

        // <strong> open and close tags
        text = text.replace(/<strong>/g, '**')
        text = text.replace(/<\/strong>/g, '**');

        // split text into paragraphs (just whenever there is \n)
        let paragraphs = text.split('\n').map(handleParagraph);

        // rejoin paragraphs after inserting the \t characters
        text = paragraphs.join('\n');

        // clean up the html symbols that still remain after replacement
        text = text.replace(/<\/?[^>]+(>|$)/g, '');

        return text;
    }


    function handleParagraph(paragraph){
        // remove whitespaces
        paragraph = paragraph.trim();

        // Add a tab at the start if the paragraph exceeds 228 chars. Maybe change this later, but
        // visual inspection shows that 228 chars is about 2 full sentences of 11 font size.
        // this deals with tabs \t
        if (paragraph.length > 228) {
            paragraph = '\t' + paragraph;
        }

        return paragraph;
    }


    return (
        <div>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                accept=".docx"
                sx={{backgroundColor: '#0C6F7B', '&:hover': {backgroundColor: '#07606B'}, borderRadius: 30, marginRight: 2}}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput type="file" accept=".docx" onChange={handleFileUpload} />
            </Button>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                accept=".pdf"
                sx={{backgroundColor: '#0C6F7B', '&:hover': {backgroundColor: '#07606B'}, borderRadius: 30, marginLeft: 2}}
                startIcon={<CloudUploadIcon />}
            >
                Upload PDF
                <VisuallyHiddenInput type="file" accept=".pdf" onChange={handlePDFUpload} />
            </Button>
            <br /><br />
            {fileName && <p>File uploaded: {fileName}</p>}
        </div>
    );
}
