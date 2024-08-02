import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { deleteJobAsync, filterTagsAsync, getJobsAsync } from "../../redux/jobs/thunks";
import MenuSimple from "../MenuSimple";
// import SortByOptions from "./SortByOptions";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

export default function JobList({ onSelectJob, selectForm, setSelectForm, selectedJob }) {
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
        console.log('dispatching getjobsasync with useremail: ', userEmail);
        dispatch(getJobsAsync(userEmail));
    }, []);

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

    // const deleteTag = (index) => {
    //     setTagFilters((prevTags) => prevTags.filter((tag, i) => i !== index));
    //     console.log('current state of tagFilters:', tagFilters);
    //     console.log('current state of tags afte delete:', tags);
    // };



  
    return(
        <div className="job-list-container">
            
            <div className="sort-by">Sort by: 
                <span className="date-applied">Date Applied</span>
            </div>

            {/* <div className="sort-by">Filter by Tag(s): 
                <input type="text" name="" id="" value={tagFilter} 
                onChange={(e) => {if (e.target.value === '') 
                                    {   let tagFilter = e.target.value;
                                        dispatch(filterTagAsync({userEmail, tagFilter}))
                                    }; 
                                    setTagFilter(e.target.value)}}/>
                <input type="button" value="search" onClick={()=> {dispatch(filterTagAsync({userEmail, tagFilter}))}}/>
            </div> */}

            <div className="sort-by">Filter by Tag(s): 
                {/*textfield to type in filter*/}
                <input className="ml-2 rounded-full pl-2" type="text" name="" id="" value={tagFilter} onChange={(e) => { setTagFilter(e.target.value) }}/>
                {/*add button*/}
                <Fab size="small" color="primary" sx={{marginLeft: 1.0}} aria-label="add" className="add-tag" onClick={() => addTag(tagFilter)}> 
                    <AddIcon />
                </Fab>
                {/*apply button*/}
                <Button variant="contained" 
                        sx={{fontFamily: "Montserrat", marginLeft: 1.0, borderRadius: 70 }} 
                        onClick={()=> {dispatch(filterTagsAsync({userEmail, tagFilters})); console.log('filtering on these tags:', tagFilters)}}>
                        Apply
                </Button>
                <div>
                    {tagFilters.map((tag, i) => {
                            //console.log('tags added so far:', tag);
                            // return <div className="rounded-md bg-sky-400 w-[100px] flex justify-between p-1"><div className="">{tag}</div> <input type="button" value="X" onClick={() => {let new_tags = [...temptags]; new_tags.splice(i, 1); setTempTags([...new_tags]); console.log(temptags)}}/> </div> 
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
            {/* <MenuSimple/> */}
        
    {
        jobs.map((j) => (
            <section key={j._id} className={`job-item ${selectedJobId === j._id ? 'selected' : ''}`} onClick={() => handleJobClick(j)}>        
                <div><b>{j.jobTitle}</b></div>
                <div>{j.company}</div>
                <div>Date Applied: {j.dateApplied}</div>                   
            </section>
        ))  
    }
    <div className="job-actions">
        <span className="add-job" onClick={() => {setSelectForm(true); onSelectJob(null)}}>Add Job</span>
        <span className="delete-job" onClick={() => {   
                                                        if (selectedJob) {
                                                            console.log("dispatching delete with email: " + userEmail)
                                                            let id = selectedJob._id
                                                            dispatch(deleteJobAsync({id, userEmail})); 
                                                            setSelectForm(false); 
                                                            onSelectJob(null);
                                                        } else {
                                                            console.log("No job selected")
                                                        }
                                                    }}>Delete Job</span>
    </div>

    </div>
        
    );
}