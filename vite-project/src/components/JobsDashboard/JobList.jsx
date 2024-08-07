import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { deleteJobAsync, filterTagsAsync, getJobsAsync } from "../../redux/jobs/thunks";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import dayjs from "dayjs";
import { useTheme } from "@emotion/react";

export default function JobList({ onSelectJob, selectForm, setSelectForm, selectedJob }) {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const jobs = useSelector(state => state.jobList.jobs);
    const userEmail = useSelector(state => state.userEmail.userEmail);

    const [tagFilter, setTagFilter] = useState('')
    const [tagFilters, setTagFilters] = useState([]);

    const dispatch = useDispatch();
    const [selectedJobId, setSelectedJobId] = useState(null);
    const handleJobClick = (job) => {
        setSelectedJobId(job._id);
        onSelectJob(job);
        console.log('selected job is:', job);
    }

    useEffect(() => {
        if (userEmail !== "nothing") {
            console.log('dispatching getjobsasync with useremail: ', userEmail);
            dispatch(getJobsAsync(userEmail))
        } else {
            console.log("userEmail is not available, skipping fetch");
        }
    }, [userEmail, dispatch]);

    const addTag = (newTag) => {
        setTagFilters((prevTags) => [...prevTags, newTag]);
        setTagFilter('');
        console.log('New tag added:', newTag);
        console.log('current state of tags after add:', tags);
    };

    const deleteTag = (index) => {
        const updatedTags = tagFilters.filter((tag, i) => i !== index);
        setTagFilters(updatedTags);
        console.log('current state of tagFilters:', tagFilters);
        if (updatedTags.length === 0) {
            console.log('no filter applied, getting all jobs');
            dispatch(getJobsAsync(userEmail));
        }  else {
            console.log('Filtering with tags:', updatedTags);
            dispatch(filterTagsAsync({ userEmail, tagFilters: updatedTags }));
        }
        console.log('current state of tags after delete:', tagFilters);
      };



  
    return(
        <div className="job-list-container">
            <div className="sort-by">Filter by Tag(s): 
                {/*textfield to type in filter*/}
                <input className="ml-2 rounded-full pl-4" type="text" name="" id="" value={tagFilter} onChange={(e) => { setTagFilter(e.target.value) }}/>
                {/*add button*/}
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
                    onClick={() => addTag(tagFilter)}> 
                    <AddIcon />
                </Fab>
                {/*apply button*/}
                <Button variant="contained" 
                        sx={{fontFamily: "Montserrat", marginLeft: 1.0, borderRadius: 70, 
                            backgroundColor: theme.palette.darkTeal,
                            '&:hover': {
                                backgroundColor: '#07606B'
                            },}} 
                        onClick={()=> {dispatch(filterTagsAsync({userEmail, tagFilters})); console.log('filtering on these tags:', tagFilters)}}>
                        Apply
                </Button>
                <div>
                    {tagFilters.map((tag, i) => {                        
                            return (
                                <Chip
                                    key={i}
                                    label={tag}
                                    sx={{
                                        fontFamily: "Montserrat",
                                        marginRight: 0.5
                                    }}
                                    onDelete={() => deleteTag(i)} 
                                />
                            );
                        })}
                </div>
            </div>
        
    {
        jobs.map((j) => (
            <section key={j._id} className={`job-item ${selectedJobId === j._id ? 'selected' : ''}`} onClick={() => handleJobClick(j)}>
                <div><b>{j.jobTitle}</b></div>
                <div>{j.company}</div>
                <div>Date Applied: {dayjs(j.dateApplied).format('YYYY-MM-DD')}</div>
            </section>
        ))
    }


    <div className="job-actions">
        <span className="add-job relative cursor-pointer" onClick={() => {setSelectForm(true); onSelectJob(null)}}> <p className="text-[black] opacity-[.56] inline-block absolute left-3 top-[-2px] text-4xl"></p>Add Job</span>
        <span className="delete-job cursor-pointer" onClick={() => {
                if(selectedJob) {
                    handleClickOpen()
                } else {
                    console.log("no job selected")
                }
            }}>Delete Job</span>
    </div>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
            '& .MuiPaper-root': {
                width: '330px',
                height: 'auto',
                borderRadius: '20px',
                fontFamily: 'monsterrat'
            },
            '& .MuiDialogContent-root': {
                fontFamily: 'monsterrat'
            }
        }}
      > 
        <div className="mt-[10px] mb-[-8px]">
            <DeleteOutlineIcon />
        </div>
        <DialogTitle id="alert-dialog-title"
        sx={{
            paddingBottom: '0',
            paddingTop: '15px'
        }}>
          {"Delete Job"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this job?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{padding: 0}}>
            <div className=" flex justify-between w-[100%] bg-[#D9D9D9] p-[10px]">
                <input type="button" value="Cancel" className="bg-[#EFEFEF] rounded-[30px] w-[90px] h-[35px] cursor-pointer" onClick={handleClose}/>
                <input type="button" value="Delete" className="bg-[#D32F2F] rounded-[30px] w-[90px] h-[35px] cursor-pointer text-[white] hover:bg-[#A41421]" onClick={() => {   
                                                                if (selectedJob) {
                                                                    console.log("dispatching delete with email: " + userEmail)
                                                                    let id = selectedJob._id
                                                                    dispatch(deleteJobAsync({id, userEmail})); 
                                                                    setSelectForm(false); 
                                                                    onSelectJob(null);
                                                                    setOpen(false);
                                                                } else {
                                                                    console.log("No job selected")
                                                                }
                                                            }} />
            </div>
        </DialogActions>
      </Dialog>

    </div>
        
    );
}