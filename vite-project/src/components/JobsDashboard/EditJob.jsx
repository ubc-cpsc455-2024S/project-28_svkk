import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateJobAsync } from "../../redux/jobs/thunks";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../styles/Job.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { IconButton } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from "@emotion/react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';



export default function EditJob({coverLetters, tailoredCoverLetters, job, setSelectedJob, handleModalClose}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    const theme = useTheme();
    var now = dayjs()

    const [jobTitle, setJobTitle] = useState(job.jobTitle || '');
    const [company, setCompany] = useState(job.company || '');
    const [jobType, setJobType] = useState(job.jobType || '');
    const [location, setLocation] = useState(job.location || '');
    const [dateApplied, setDateApplied] = useState(job.dateApplied ? dayjs(job.dateApplied) : dayjs());
    const [duration, setDuration] = useState(job.duration || '');
    const [link, setLink] = useState(job.link || '');
    const [status, setStatus] = useState(job.status || '');
    const [coverLetter, setCoverLetter] = useState(job.coverLetterUsed || '');
    const [tailoredCoverLetter, setTailoredCoverLetter] = useState(job.tailoredCoverLetterUsed || '');
    const [tags, setTags] = useState(job.tags || []);
    const [tag, setTag] = useState('');
    const [temptags, setTempTags] = useState([...job.tags]);

    const jobTitleInputRef = useRef();
    const companyInputRef = useRef();
    const jobTypeInputRef = useRef();
    const locationInputRef = useRef();
    const dateAppliedInputRef = useRef();
    const durationInputRef = useRef();
    const linkInputRef = useRef();
    const statusInputRef = useRef();
    const coverLetterInputRef = useRef();
    const tailoredCoverLetterInputRef = useRef();

    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          fontSize: 12,
          fontFamily: "Montserrat",
          borderRadius: '30px'
        },
      }));

    useEffect(() => {
        console.log('job application status changed to:', status);
    }, [status]);

    return(
        <>
        {console.log("Job value is: " + job)}
        <div className="editJobView max-w-1/2 mt-16 m-auto overflow-y-scroll border rounded-[35px] bg-white drop-shadow-lg flex-1">

            <div className="flex border-b">
                <div className="font-bold w-52 p-[30px] border-r flex items-center">
                    Job Title:
                </div>
                <div className="p-[30px]"> 
                    <div className=" relative">
                        <input type="text" name="" id="jobTitle" 
                               value={jobTitle} 
                               ref={jobTitleInputRef} 
                               className="border p-2 pl-6 rounded-[30px]"
                               onChange={(e) => {
                                setJobTitle(e.target.value);
                                adjustWidth(e.target);
                            }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Job Title*</span>
                    </div> 
                </div>
            </div>

            <div className="flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Company:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input id="company" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={company}
                            ref={companyInputRef}
                            onChange={(e) => {
                                setCompany(e.target.value);
                        }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Company*</span>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Job Type:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input id="job-type" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={jobType}
                            ref={jobTypeInputRef}
                            onChange={(e) => {
                                setJobType(e.target.value)
                            }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Job type</span>
                    </div> 
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Location:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input id="location" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={location}
                            ref={locationInputRef}
                            onChange={(e) => {
                                setLocation(e.target.value);                          
                            }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Location</span>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Date Applied:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date Applied"
                            value={dateApplied}
                            ref={dateAppliedInputRef}
                            onChange={(newDate) => {                             
                                setDateApplied(newDate);
                                console.log('new date selected is:', newDate);
                            }}
                        />
                    </LocalizationProvider>
                    </div>  
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Duration:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input id="duration" 
                        className="border p-2 pl-6 rounded-[30px]"
                        value={duration}
                        ref={durationInputRef}
                        onChange={(e) => {
                            setDuration(e.target.value)                        
                        }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Duration</span>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Link:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input id="link" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={link}
                            ref={linkInputRef}
                            onChange={(e) => {
                                setLink(e.target.value);                       
                        }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Link</span>
                    </div>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center text-left">
                    Application Status:
                </div>
                <div className="p-[30px]">
                    <Box sx={{ minWidth: 263 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Application Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Application Status"
                                onChange={(e) => {
                                    setStatus(e.target.value);
                                }}
                                >
                                <MenuItem value={'Considering'}>Considering</MenuItem>
                                <MenuItem value={'Applied'}>Applied</MenuItem>
                                <MenuItem value={'Ghosted'}>Ghosted</MenuItem>
                                <MenuItem value={'Rejected'}>Rejected</MenuItem>
                                <MenuItem value={'Recieved Offer'}>Recieved Offer</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>

            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Tags:
                </div>
                <div className="p-[30px]"> 
                   
                    <div className="">
                        <div className="relative">
                            <input type="text" name="" id="" placeholder="Enter new Tag" value={tag} className="border p-2 pl-6 rounded-[30px] mr-2 mb-2" onChange={(e) => {
                                    setTag(e.target.value);
                                    
                                }}/> 
                            
                            <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Tag</span>

                            <Fab size="small" 
                                sx={{
                                    backgroundColor: theme.palette.darkTeal,
                                    '&:hover': {
                                        backgroundColor: '#07606B'
                                    },
                                    color: theme.palette.bg // Text color of the icon
                                }}
                                aria-label="add" 
                                className="add-tag" 
                                onClick={() => {
                                    if (tag != ''){console.log("pushing"); 
                                    let new_tags = [...temptags]; new_tags.push(tag); 
                                    setTempTags([...new_tags]); setTag(''); 
                                    console.log('updated tags:', temptags)}}}> 
                                <AddIcon />
                            </Fab>
                        </div>
                         
                        <div className="flex lex-auto flex-row items-center">
                                {console.log(temptags)}
                                {temptags.map((tag, i) => {
                                        console.log(tag);
                                        return <Chip
                                            label={tag}
                                            sx={{
                                                fontFamily: "Montserrat",
                                                marginRight: 0.5
                                            }}
                                            onDelete={() => {let new_tags = [...temptags]; new_tags.splice(i, 1); setTempTags([...new_tags]); console.log(temptags)}} 
                                            />
                                })}
                        </div>
                    </div> 
                </div>
            </div>
            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r text-left flex items-center">
                    Cover Letter Used:
                </div>
                <div className="p-[30px] rounded-br-[30px] flex justify-start gap-x-12 grow"> 
                    <div>
                        <Box sx={{ minWidth: 263 }}>
                            <FormControl fullWidth>
                                <InputLabel id="cv">Cover Letter</InputLabel>
                                <Select
                                    labelId="cv-label"
                                    id="cv"
                                    value={coverLetter}
                                    label="Cover Letter"
                                    onChange={(e) => {
                                        console.log('CV changed to:', e.target.value);
                                        setCoverLetter(e.target.value);
                                    }}
                                    >
                                    {coverLetters.map(coverLetter => {
                                                                        console.log(coverLetter.name)
                                                                        return (<MenuItem value={coverLetter.name}>{coverLetter.name}</MenuItem>)
                                                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div>
                            <Box sx={{ minWidth: 263 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="tcv">Tailored Cover Letter</InputLabel>
                                    <Select
                                        labelId="tcv"
                                        id="tcv"
                                        value={tailoredCoverLetter}
                                        label="Tailored Cover Letter"
                                        onChange={(e) => {
                                            console.log('tcv changed to:', e.target.value);
                                            setTailoredCoverLetter(e.target.value);
                                        }}
                                        >
                                        {tailoredCoverLetters.map(tcoverLetter => {
                                                                            console.log(tcoverLetter.name)
                                                                            return (<MenuItem value={tcoverLetter.name}>{tcoverLetter.name}</MenuItem>)
                                                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                    </div>
                </div>
            </div>

            <div className=" flex ">
                <div className="font-bold w-[208px] p-[30px]  flex items-center"></div>
                <div className="p-[30px] flex flex-row justify-items-center">                                                      
                        <button className="rounded-[30px] bg-red hover:bg-redHover p-2 text-white pr-4 pl-4" onClick={() => {
                            setJobTitle(job.jobTitle);
                            setCompany(job.company);
                            setJobType(job.jobType);
                            setLocation(job.location);
                            setDateApplied(dayjs(job.dateApplied));
                            setDuration(job.duration);
                            setLink(job.link);
                            setStatus(job.status);
                            setCoverLetter(job.coverLetter);
                            setTailoredCoverLetter(job.tailoredCoverLetter);
                            setTempTags([...tags])
                            console.log('modal closing, cancelling changes');
                            handleModalClose();
                        }}>Cancel</button>
                        <button className="rounded-[30px] bg-green hover:bg-greenHover p-2 pr-4 pl-4 text-black ml-8" onClick={() => {
                            console.log("CV: ", coverLetter)
                            console.log("TCV: ", tailoredCoverLetter)
                            dateApplied.toDate();          
                            console.log('dispatching update job async');
                            dispatch(updateJobAsync({id: job._id, fields: {jobTitle, company, jobType, location, duration, link, dateApplied, status, coverLetter, tailoredCoverLetter, temptags}}));
                            console.log(coverLetter, tailoredCoverLetter)
                            let updated_job = {id: job._id, jobTitle: jobTitle, company: company, jobType: jobType, location: location, duration: duration, link: link, dateApplied: dateApplied, status: status, tags: temptags, coverLetterUsed: coverLetter, tailoredCoverLetterUsed: tailoredCoverLetter}
                            setSelectedJob(updated_job)
                            setTags([...temptags])
                            console.log('modal closing, updated job');
                            handleModalClose();
                            console.log("job data sent: ", updated_job)
                        }}>Save Changes</button> 
                </div>
            </div>
        </div>
    </>
    );

}