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
import { useTheme } from "@emotion/react";


export default function EditJob({job, handleModalClose}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // handleSave function  - dispatch update job and handleClose()

    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [duration, setDuration] = useState('');
    const [link, setLink] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [tailoredCoverLetter, setTailoredCoverLetter] = useState('');
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const [temptags, setTempTags] = useState([])

    const jobTitleInputRef = useRef();
    const companyInputRef = useRef();
    const jobTypeInputRef = useRef();
    const locationInputRef = useRef();
    const dateAppliedInputRef = useRef();
    const durationInputRef = useRef();
    const linkInputRef = useRef();
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

    return(
        <>
        <div className="editJobView max-w-1/2 mt-16 m-auto overflow-y-scroll border rounded-[35px] bg-white drop-shadow-lg flex-1">
            <div className="flex border-b">
                <div className="font-bold w-52 p-[30px] border-r flex items-center">
                    Job Title:
                </div>
                <div className="p-[30px]"> 
                    <div className=" relative">
                        <input type="text" name="" id="" placeholder="Job Title" className="border p-2 pl-6 rounded-[30px]"/> 
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Job Title</span>
                    </div> 
                </div>
            </div>
            <div className="flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Company:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input type="text" name="" id="" placeholder="Company" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Company</span>
                    </div>
                </div>
            </div>
            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Job Type:
                </div>
                <div className="p-[30px]">
                    <div className=" relative"><input type="text" name="" id="" placeholder="Job Type" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Job type</span>
                    </div> 
                </div>
            </div>
            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Location:
                </div>
                <div className="p-[30px]">
                    <div className=" relative"><input type="text" name="" id="" placeholder="Location" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Location</span>
                    </div>
                </div>
            </div>
            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Date Applied:
                </div>
                <div className="p-[30px]">
                    <div className=" relative"><input type="text" name="" id="" placeholder="Date Applied" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Date Applied</span>
                    </div>
                </div>
            </div>
            <div className=" flex border-b">
                <div className="font-bold w-[208px] p-[30px] border-r flex items-center">
                    Duration:
                </div>
                <div className="p-[30px]">
                    <div className=" relative">
                        <input type="text" name="" id="" placeholder="Duration" className="border p-2 pl-6 rounded-[30px]"/>
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
                        <input type="text" name="" id="" placeholder="Link" className="border p-2 pl-6 rounded-[30px]"/>
                        <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Link</span>
                    </div> 
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
        </div>
    </>
    );

}