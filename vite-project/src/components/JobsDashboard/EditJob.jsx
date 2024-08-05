import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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



export default function EditJob({job, setSelectedJob, handleModalClose}) {
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
    // const [dateApplied, setDateApplied] = useState(job.dateApplied || dayjs().format('YYYY-MM-DD'));
    const [duration, setDuration] = useState(job.duration || '');
    const [link, setLink] = useState(job.link || '');
    const [status, setStatus] = useState(job.status || '');
    const [coverLetter, setCoverLetter] = useState(job.coverLetter || '');
    const [tailoredCoverLetter, setTailoredCoverLetter] = useState(job.tailoredCoverLetter || '');
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
        //   backgroundColor: '#FFFFFF',
        //   color: 'rgba(0, 0, 0, 0.87)',
        //   boxShadow: theme.shadows[1],
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
                        {/* <input type="text" name="" id="" placeholder="Company" className="border p-2 pl-6 rounded-[30px]"/> */}
                        <input id="company" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={company}
                            ref={companyInputRef}
                            onChange={(e) => {
                                setCompany(e.target.value);
                                // adjustWidth(e.target);
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
                        {/* <input id="dateApplied" 
                            className="border p-2 pl-6 rounded-[30px]"
                            value={dateApplied}
                            ref={dateAppliedInputRef}
                            onChange={(e) => {
                                setDateApplied(e.target.value);                          
                            }}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Date Applied*</span>
                    </div> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date Applied"
                            value={dateApplied}
                            ref={dateAppliedInputRef}
                            onChange={(newDate) => {
                                // console.log('new YYYY-MM-DD is:', d.year(), d.month(), d.date);
                                // var newDate = new Date(d.year(), d.month(), d.date);                              
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
                        {/* <input type="text" name="" id="" placeholder="Duration" className="border p-2 pl-6 rounded-[30px]"/> */}
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
                        {/* <input type="text" name="" id="" placeholder="Link" className="border p-2 pl-6 rounded-[30px]"/> */}
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
                    {/* <div className=" relative">
                        <input type="text" name="" id="" placeholder="Application Status:" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Status</span>
                    </div>  */}
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
                                    // console.log('job application status changed to:', status);
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
                    {/* <div className=" relative">
                        <input type="text" name="" id="" placeholder="Enter new Tag" className="border p-2 rounded-[30px]"/> 
                        <span className=" bg-white p-1 text-[11px] absolute left-[14px] top-[-12px]">Tags</span>
                    </div> */}

                    <div className="">
                        {/* <input id="tags" 
                                className="auto-width-input"
                                value={tag}
                                onChange={(e) => {
                                    setTag(e.target.value);
                                    adjustWidth(e.target);
                                }}> */}
                        <div className="relative">
                            <input type="text" name="" id="" placeholder="Enter new Tag" value={tag} className="border p-2 pl-6 rounded-[30px] mr-2 mb-2" onChange={(e) => {
                                    setTag(e.target.value);
                                    // adjustWidth(e.target);
                                }}/> 
                            
                            <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Tag</span>

                            <Fab size="small" 
                                sx={{
                                    backgroundColor: theme.palette.darkTeal,
                                    '&:hover': {
                                        backgroundColor: '#07606B'
                                        // backgroundColor: theme.palette.teal
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
                         
                        {/* <input type="button" className="add-tag" value="+" onClick={() => {if (tag != ''){console.log("pushing"); let new_tags = [...temptags]; new_tags.push(tag); setTempTags([...new_tags]); console.log(temptags)}}}/> */}
                        <div className="flex lex-auto flex-row items-center">
                                {console.log(temptags)}
                                {/* <div className="flex-auto flex-row items-center">*/}
                                {temptags.map((tag, i) => {
                                        console.log(tag);
                                        // return <div className="rounded-md bg-sky-400 w-[100px] flex justify-between p-1"><div className="">{tag}</div> <input type="button" value="X" onClick={() => {let new_tags = [...temptags]; new_tags.splice(i, 1); setTempTags([...new_tags]); console.log(temptags)}}/> </div> 
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
            <div className=" flex">
                <div className="font-bold w-[208px] p-[30px] border-r text-left flex items-center">
                    Cover Letter Used:
                </div>
                <div className="p-[30px] rounded-br-[30px] flex justify-between grow"> 
                    <div>
                            <Button
                                                                        id="basic-button"
                                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                                        aria-haspopup="true"
                                                                        aria-expanded={open ? 'true' : undefined}
                                                                        onClick={handleClick}
                                                                    >
                                                                        Choose Cover Letter
                            </Button>
                            <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                        'aria-labelledby': 'basic-button',
                                                                        }}
                                                                    >
                                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                    </div>

                    <div>
                            <Button
                                                                        id="basic-button"
                                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                                        aria-haspopup="true"
                                                                        aria-expanded={open ? 'true' : undefined}
                                                                        onClick={handleClick}
                                                                    >
                                                                        Choose Tailored Cover Letter
                            </Button>
                            <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                        'aria-labelledby': 'basic-button',
                                                                        }}
                                                                    >
                                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                    </div>
                </div>
            </div>

            <span className="cancel" onClick={() => {
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
            }}>Cancel</span>
            <span className="update" onClick={() => {
                // dateApplied.format('YYYY-MM-DD')
                dateApplied.toDate();          
                console.log('dispatching update job async');
                dispatch(updateJobAsync({id: job._id, fields: {jobTitle, company, jobType, location, duration, link, dateApplied, status, coverLetter, tailoredCoverLetter, temptags}}));
                let updated_job = {id: job._id, jobTitle: jobTitle, company: company, jobType: jobType, location: location, duration: duration, link: link, dateApplied: dateApplied, status: status, tags: temptags}
                setSelectedJob(updated_job)
                setTags([...temptags])
                // setSelectedJob(job)
                console.log('modal closing, updated job');
                handleModalClose();
            }}>Save Changes</span> 
        </div>
    </>
    );

}