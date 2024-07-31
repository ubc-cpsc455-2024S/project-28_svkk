import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType
} from 'docx';
import DropdownSelector from "./DropdownSelector.jsx";

export default function DownloadDocx({name, text}) {
    const [fontSize, setFontSize] = useState(11);
    const [fontStyle, setFontStyle] = useState("Calibri");
    const [margin, setMargin] = useState(0.5);

    function handleSetSize(value) {
        if (value === "Size") {
            setFontSize(11);
        } else {
            setFontSize(parseFloat(value));
        }
    }

    function handleSetStyle(value) {
        console.log(value);
        if (value === "Font Style") {
            setFontStyle("Calibri")
        } else {
            setFontStyle(value.toString());
        }
    }

    function handleSetMargin(value) {

        if (value === "Margin") {
            setMargin(0.5)
        } else {
            setMargin(parseFloat(value));
        }
    }


    const fontStyleOptions = [
        { name: "Font Style"},
        { name: "Comic Sans MS" },
        { name: "Palatino Linotype" },
        { name: "Verdana" },
        { name: "Courier New" },
        { name: "Times New Roman" },
        { name: "Arial" },
        { name: "Garamond" },
        { name: "Lucida Sans Unicode" },
        { name: "Tahoma" },
        { name: "Calibri" },
        { name: "Georgia" },
        { name: "Trebuchet MS" }
    ];

    const fontSizeOptions = [
        { name: "Size"},
        { name: 10 },
        { name: 10.5 },
        { name: 11 },
        { name: 11.5 },
        { name: 12 },
        { name: 12.5 },
        { name: 13 },
        { name: 13.5 },
        { name: 14 },
        { name: 14.5 },
        { name: 15 },
        { name: 15.5 },
        { name: 16 },
        { name: 16.5 },
        { name: 17 },
        { name: 17.5 },
        { name: 18 },
        { name: 18.5 },
        { name: 19 },
        { name: 19.5 },
        { name: 20 }
    ];

    const marginOptions = [
        { name: "Margin"},
        { name: 0 },
        { name: 0.25 },
        { name: 0.5 },
        { name: 0.75 },
        { name: 1 },
        { name: 1.25 },
        { name: 1.5 },
        { name: 1.75 },
        { name: 2 }
    ];


    const parseText = (text) => {

        const lines = text.split('\n');
        const paragraphs = [];

        lines.forEach(line => {
            const children = [];

            // regular expression
            // \ used to escape.
            // /.../ used to define the regular expression
            // ** or \t
            const parts = line.split(/(\*\*|\t)/);

            let isBold = false;

            parts.forEach(part => {
                if (part === '**') {
                    // Case where bold is detected.
                    isBold = !isBold;
                } else if (part === '\t') {
                    // Case where a tab is detected
                    children.push(new TextRun({ text: '\t', font: fontStyle, size: fontSize * 2 }));
                } else {
                    // Nothing is detected
                    // This is where the bold boolean makes the TextRun bold or not.
                    children.push(new TextRun({ text: part, font: fontStyle, size: fontSize * 2, bold: isBold }));
                }
            });

            // This could be changed later but I think we'll keep it as default for now.
            // If the line includes Re: then it is considered a title.
            const alignment = line.includes("Re:") ? AlignmentType.CENTER : AlignmentType.LEFT;

            paragraphs.push(new Paragraph({
                children: children.length > 0 ? children : [new TextRun({ text: ' ', font: fontStyle, size: fontSize * 2 })],
                alignment: alignment,
            }));
        });

        return paragraphs;
    };

    // based on docx documentation https://docx.js.org/#/?id=welcome and demos
    const generateDocx = async () => {
        const document = new Document({
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: margin * 1440, // converting inches to Twips (1 inch = 1440 Twips)
                                right: margin * 1440,
                                bottom: margin * 1440,
                                left: margin * 1440,
                            }
                        }
                    },
                    children: parseText(text),
                },
            ],
        });

        // Using a blob ._.
        const blob = await Packer.toBlob(document);
        saveAs(blob, name + '.docx');
    };

    return (
        <div>
            <button className="add_button" onClick={generateDocx}>Download .docx</button>
            <br></br><br></br>
            <DropdownSelector label="Font Size" setSelectedElement={handleSetSize} allElements={fontSizeOptions} />
            <DropdownSelector label="Font Style" setSelectedElement={handleSetStyle} allElements={fontStyleOptions} />
            <DropdownSelector label="Margin (inches)" setSelectedElement={handleSetMargin} allElements={marginOptions} />
        </div>
    );
}
