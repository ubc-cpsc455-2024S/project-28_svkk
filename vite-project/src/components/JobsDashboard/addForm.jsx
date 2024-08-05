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
import Tags from "../Tags";
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
    // const coverLetters = useSelector(state => state.coverLetterList.coverLetters);
    // const tailoredCoverLetters = useSelector(state => state.tailoredCoverLetterList.tailoredCoverLetters);
    // const [selectedElement, setSelectedElement] = useState(null);

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
        // console.log('coverletters: ', coverLetters);
        // console.log('tailored coverletters ', tailoredCoverLetters);
        //await dispatch(addJobAsync({ title, company, type, location, date, duration, link, cv, tcv, userEmail }))
        console.log('dispatching add job with data:', { title, company, type, location, date, duration, link, cv, tcv, userEmail, tags});
        await dispatch(addJobAsync({ title, company, type, location, date, duration, link, cv, tcv, userEmail, tags}));
        // await dispatch(getCoverLettersAsync({email: userEmail}));
        // await dispatch(getTailoredCoverLettersAsync({email: userEmail}));
      
        props.setSelectForm(false)
        props.setSelectedJob(null)
    }

    const addTag = (newTag) => {
        setTags((prevTags) => [...prevTags, newTag]);
        setTag('');
        console.log('New tag added:', newTag);
        console.log('current state of tags after add:', tags);
    };

    const deleteTag = (index) => {
        setTags((prevTags) => prevTags.filter((tag, i) => i !== index));
        console.log('current state of tags afte delete:', tags);
      };

  return (
    <div className="editJobView w-[80%] mt-16 m-auto overflow-y-scroll border rounded-[35px] bg-white drop-shadow-lg flex-1">
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
                        {/* <input type="text" name="" id="" placeholder="Company" className="border p-2 pl-6 rounded-[30px]"/> */}
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
                            value={date}
                            onChange={(newDate) => {
                                // console.log('new YYYY-MM-DD is:', d.year(), d.month(), d.date);
                                // var newDate = new Date(d.year(), d.month(), d.date);                              
                                setDate(newDate);
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
                                        if (tag != ''){
                                            addTag(tag)
                                        }
                                    }}> 
                                <AddIcon />
                            </Fab>
                        </div>
                         
                        {/* <input type="button" className="add-tag" value="+" onClick={() => {if (tag != ''){console.log("pushing"); let new_tags = [...temptags]; new_tags.push(tag); setTempTags([...new_tags]); console.log(temptags)}}}/> */}
                        <div className="flex lex-auto flex-row items-center">
                                {console.log(tags)}
                                {/* <div className="flex-auto flex-row items-center">*/}
                                {tags.map((tag, i) => {
                                        console.log(tag);
                                        // return <div className="rounded-md bg-sky-400 w-[100px] flex justify-between p-1"><div className="">{tag}</div> <input type="button" value="X" onClick={() => {let new_tags = [...temptags]; new_tags.splice(i, 1); setTempTags([...new_tags]); console.log(temptags)}}/> </div> 
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
            <div className='text-center border-t p-[25px]'>
             <input className="add-job w-[150px] p-[10px]" type="button" value="Add Job" onClick={async () => {await addJob(), console.log("adding new job")}}/>
            </div>
    </div>
    
)
}


export default Form

// <div className='flex flex-col justify-between border-solid rounded-lg text-sm w-[100%] h-[100%]'>
//   <div className='mt-2 text-center'><h2 className='text-3xl'>Add Job</h2></div>
//   <form className='my-[10px]'>
//     <div className='my-[10px] flex justify-between'>
//         <div>
//             <label className='block '>
//                 Job Title:
//                 <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" name="" id="" placeholder='Job Title' className='m-4 ml-[71px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block '>
//                 Company:
//                 <input value={company} onChange={(e) => {setCompany(e.target.value)}} type="text" name="" id="" placeholder='Company' className='m-4 ml-[64px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block '>
//                 Job Type:
//                 <input value={type} onChange={(e) => {setType(e.target.value)}} type="text" name="" id="" placeholder='Job Type' className='m-4 ml-[70px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block'>
//                 Location:
//                 <input value={location} onChange={(e) => {setLocation(e.target.value)}} type="text" name="" id="" placeholder='Location' className='m-4 ml-[71px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block'>
//                 Date Applied:
//                 <input value={date} onChange={(e) => {setDate(e.target.value)}} type="text" name="" id="" placeholder='Date Applied' className='m-4 ml-[39px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block'>
//                 Duration:
//                 <input value={duration} onChange={(e) => {setDuration(e.target.value)}} type="text" name="" id="" placeholder='Duration' className='m-4 ml-[68px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block'>
//                 Link:
//                 <input value={link} onChange={(e) => {setLink(e.target.value)}} type="text" name="" id="" placeholder='Link' className='m-4 ml-[100px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//             </label>
//             <label className='block flex-auto flex-row items-center'>
//                 Tags: 
//                 <input value={tag} onChange={(e) => {setTag(e.target.value)}} type="text" name="" id="" placeholder='Tag' className='m-4 ml-[100px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
//                 <Fab size="small" color="primary" aria-label="add" className="add-tag" onClick={() => adag(tag)}> 
//                     <AddIcon />
//                 </Fab>
//             </label>
//             <div className='block self-center justify-self-center justify-items-center'>
//                 {tags.map((tag, i) => {
//                             //console.log('tags added so far:', tag);
//                             // return <div className="rounded-md bg-sky-400 w-[100px] flex justify-between p-1"><div className="">{tag}</div> <input type="button" value="X" onClick={() => {let new_tags = [...temptags]; new_tags.splice(i, 1); setTempTags([...new_tags]); console.log(temptags)}}/> </div> 
//                             return (
//                                 <Chip
//                                     key={i}
//                                     label={tag}
//                                     sx={{
//                                         fontFamily: "Montserrat",
//                                         marginRight: 0.5
//                                     }}
//                                     onDelete={() => deleteTag(i)} 
//                                 />
//                             );
//                 })}

//             </div>
        
//         </div>
//         <div className="flex flex-col">
//             <div>
//                 <label className='block'>
//                     Cover Letter Used:
//                     <br/>
//                     <textarea value={cv} onChange={(e) => {setCV(e.target.value)}} type="text" name="" id="" rows={10} cols={60} className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'></textarea>
//                 </label>
//             </div>
//             <div>
//                 <label className='block'>
//                     Tailored Cover Letter Used:
//                     <br/>
//                     <textarea value={tcv} onChange={(e) => {setTCV(e.target.value)}} type="text" name="" id="" rows={10} cols={60} className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'></textarea>
//                 </label>
//             </div>
//         </div>
//         {/* <div className="button-holder">
//                 <DropdownSelector
//                     allElements={coverLetters}
//                     setSelectedElement={setSelectedElement}
//                 />
//                 <DropdownSelector
//                     allElements={tailoredCoverLetters}
//                     setSelectedElement={setSelectedElement}
//                 />
//         </div> */}
//     </div>
//     <div className='text-center'>
//         <input className="add-job w-[150px] p-[10px]" type="button" value="Add Job" onClick={async () => {await addJob(), console.log("adding new job")}}/>
//     </div>
//   </form>
// </div>