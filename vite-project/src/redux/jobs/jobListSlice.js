import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid';

const initialState = {
    jobs: [
        {
            id: uuid4(),
            jobTitle: "Software Engineering Intern",
            company: "Microsoft",
            jobType: "Onsite",
            location: "Vancouver, BC",
            dateApplied: "2024-06-01",
            duration: "Aug. - Dec. 2024",
            link: "https://shorturl.at/D3MlH",
            coverLetterUsed: "",
        },
        {
            id: uuid4(),
            jobTitle: "Software Engineering Intern - Fullstack (Product)",
            company: "Super.com",
            jobType: "Remote",
            location: "Toronto, ON",
            dateApplied: "2024-06-03",
            duration: "Sep. - Dec. 2024",
            link: "https://shorturl.at/xnIf6",
            coverLetterUsed: "",
        }, 
        {
            id: uuid4(),
            jobTitle: "Software Development Engineer Intern",
            company: "Amazon",
            jobType: "Onsite",
            location: "Halifax, NS, Canada",
            dateApplied: "2024-06-05",
            duration: "Sept. - Dec. 2024",
            link: "https://shorturl.at/QvKB0",
            coverLetterUsed: "",
        }

    ]
}

export const jobListSlice = createSlice({
    name: 'jobList',
    initialState,
    reducers: {
        
    }
})

export default jobListSlice.reducer