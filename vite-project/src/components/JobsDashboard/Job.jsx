import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJobAsync } from "../../redux/jobs/thunks";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../styles/Job.css';
import Tags from "../Tags";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Dialog, IconButton } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from "@emotion/react";
import EditJob from "./EditJob";
import Modal from '@mui/material/Modal';
import dayjs from "dayjs";
import { getJobByIdAsync } from "../../redux/jobs/thunks";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';




export default function Job({coverLetters, tailoredCoverLetters, job, setSelectedJob}) {
    const theme = useTheme();

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [duration, setDuration] = useState('');
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [tailoredCoverLetter, setTailoredCoverLetter] = useState('');
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const [temptags, setTempTags] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // The following snippet of code for useEffect and value={<some job field value>} in
    // each job-field container was generated by ChatGPT 3.5 on June 20, 2024
    // The prompt was: "why isn't the job details panel on the right changing accordingly 
    // when a different job is selected on the left jobList panel?", including feeding
    // it the code in JobsContainer.jsx, JobList.jsx and the previous code for Job.jsx
    useEffect(() => {
        if (job) {
            console.log('Job data received (Job.jsx):', job);
            setJobTitle(job.jobTitle || '');
            setCompany(job.company || '');
            setJobType(job.jobType || '');
            setLocation(job.location || '');
            setDateApplied(job.dateApplied || '');
            setDuration(job.duration || '');
            setLink(job.link || '');
            setStatus(job.status || '');
            setCoverLetter(job.coverLetterUsed || '');
            setTailoredCoverLetter(job.tailoredCoverLetterUsed || '');
            setTags(job.tags || [])
            setTempTags(job.tags || [])
        }
    }, [job])

    const adjustWidth = (input) => {
        if (input) {
            input.style.width = `${input.value.length + 1}ch`;
        }
    }

    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          fontSize: 12,
          fontFamily: "Montserrat",
          borderRadius: '30px'
        },
      }));

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    

    return(
        <>
        <div className="bg-bg flex flex-col justify-center h-full">
        <div className="jobView w-[80%] mt-16 m-auto overflow-y-scroll border rounded-[35px] bg-white">
            <div className="flex justify-center p-8 border-b">
                    <h1 className="text-3xl font-semibold">{jobTitle}</h1>
            </div>

            <div className="flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Company:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={company} className="p-2 pl-6 text-xl w-full" readOnly={true}/> 
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Job Type:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={jobType} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div> 
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Location:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={location} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Date Applied:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={dayjs(dateApplied).format('YYYY-MM-DD')} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Duration:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={duration} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Link:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input type="text" name="" id="" value={link} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div> 
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Application Status:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={status} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div> 
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Tags:
                </div>
                <div className="p-[30px] grow"> 
                         
                        <div className="p-2 pl-6 flex lex-auto flex-row items-center">
                                {console.log(temptags)}
                                {temptags.map((tag, i) => {
                                        console.log(tag);                                    
                                        return <Chip
                                            label={tag}
                                            key={i}
                                            sx={{
                                                fontFamily: "Montserrat",
                                                marginRight: 1.5,                                        
                                                fontSize: 16
                                            }}/>
                                })}
                        </div>
                    </div>
            </div>

            <div className=" flex border-b">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Cover Letter Used:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={coverLetter} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div> 
                </div>
            </div>
            
            <div className=" flex">
                <div className="font-semibold w-[208px] p-[30px] border-r flex items-center text-xl">
                    Tailored Cover Letter Used:
                </div>
                <div className="p-[30px] grow">
                    <div className=" relative">
                        <input type="text" name="" id="" value={tailoredCoverLetter} className="p-2 pl-6 text-xl w-full" readOnly={true}/>
                    </div> 
                </div>
            </div>


        </div>
    
    {/*notepad ends here*/}
        
        <div className="options">
            {/* <EditJob job={job}></EditJob> */}
            <StyledTooltip title="Edit job">
                <IconButton onClick={handleEditClick}>
                    <EditIcon fontSize='large' sx={{color: '#666666'}}></EditIcon>
                </IconButton>
            </StyledTooltip>
            
            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                aria-labelledby="edit-job-modal-title"
                aria-describedby="edit-job-modal-description"
            >
                <div className="flex justify-center items-center">
                <EditJob coverLetters={coverLetters} tailoredCoverLetters={tailoredCoverLetters} job={job} setSelectedJob={setSelectedJob} handleModalClose={handleModalClose} />
                </div>  
            </Modal>
            
        </div>
        </div>
        </>
    );
} 

 