import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJobAsync, getJobsAsync } from "../../redux/jobs/thunks";
import { getCoverLettersAsync } from '../../redux/coverLetters/thunk';
import { getTailoredCoverLettersAsync } from '../../redux/tailoredCoverLetters/thunk';
import DropdownSelector from '../CoverLetterCreationComponents/DropdownSelector';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../styles/Job.css';
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

const Form = (props) => {
    const userEmail = useSelector(state => state.userEmail.userEmail);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    var now = dayjs()

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(now)
    const [duration, setDuration] = useState('')
    const [status, setStatus] = useState('')
    const [link, setLink] = useState('')
    const [cv, setCV] = useState('')
    const [tcv, setTCV] = useState('')
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])

    const dispatch = useDispatch();

    async function addJob() {

        await dispatch(addJobAsync({ title, company, type, location, date, duration, link, status, cv, tcv, userEmail, tags}));
        props.setSelectForm(false)
        props.setSelectedJob(null)
    }

    const addTag = (newTag) => {
        setTags((prevTags) => [...prevTags, newTag]);
        setTag('');


    };

    const deleteTag = (index) => {
        setTags((prevTags) => prevTags.filter((tag, i) => i !== index));

      };

  return (
    <div className="editJobView w-[80%] mt-16 m-auto overflow-y-scroll border rounded-[35px] bg-white drop-shadow-lg flex-1 mb-16">
            <div className="flex border-b">
                <div className="font-bold w-52 p-[30px] border-r flex items-center">
                    Job Title:
                </div>
                <div className="p-[30px]"> 
                    <div className=" relative">
                        <input type="text" name="" id="jobTitle" 
                               value={title} 
                               className="border p-2 pl-6 rounded-[30px]"
                               onChange={(e) => {
                                setTitle(e.target.value);
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
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
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
                            value={date}
                            onChange={(newDate) => {                              
                                setDate(newDate);

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
                                        if (tag != ''){
                                            addTag(tag)
                                        }
                                    }}> 
                                <AddIcon />
                            </Fab>
                        </div>
                         
                        <div className="flex lex-auto flex-row items-center">

                                {tags.map((tag, i) => {

                                        return <Chip
                                            label={tag}
                                            sx={{
                                                fontFamily: "Montserrat",
                                                marginRight: 0.5
                                            }}
                                            onDelete={() => deleteTag(i)} 
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
                <div className="p-[30px] rounded-br-[30px] flex justify-start gap-x-12 grow"> 
                    <div>
                            <Box sx={{ minWidth: 263 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="cv">Cover Letter</InputLabel>
                                    <Select
                                        labelId="cv-label"
                                        id="cv"
                                        value={cv}
                                        label="Cover Letter"
                                        sx={{fontFamily: 'Montserrat'}}
                                        onChange={(e) => {

                                            setCV(e.target.value);
                                        }}
                                        >
                                        {props.coverLetters.map(coverLetter => {

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
                                        value={tcv}
                                        label="Tailored Cover Letter"
                                        onChange={(e) => {

                                            setTCV(e.target.value);
                                        }}
                                        >
                                        {props.tailoredCoverLetters.map(tcoverLetter => {

                                                                            return (<MenuItem value={tcoverLetter.name}>{tcoverLetter.name}</MenuItem>)
                                                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                    </div>
                </div>
            </div>
            
            <div className='text-center border-t p-[25px]'>

            </div>
            
           
    </div>
    
)
}


export default Form
