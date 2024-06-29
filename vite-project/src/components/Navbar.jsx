
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { searchJobsAsync } from "../redux/jobs/thunks";

export default function Navbar(props) {

    const dispatch = useDispatch()

    const [filter, setfilter] = useState('')

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
      

    return(
        <nav className={"navBar"}>
            <div className={"navBar-Left"}>
                <h1> Job Applications</h1>
            </div>
            <div className={"navBar-Right"}>
                <div className={"navBar-Buttons"}>
                    <Link to="/CoverLetterPage"><button className={"navBar-Button"}> Create Cover Letter</button></Link>
                    <Link to="/Login"><button className={"navBar-Button"}> Sign out</button></Link>
                    {/* <Button variant="contained" className="navBar-Button">Create Cover Letter</Button>
                    <Button variant="contained" className="navBar-Button">Sign Out</Button> */}
                </div>
                <div className={"searchBar-wrapper"}>
                    {/* <i class='fa fa-search left:10px'></i> */}
                    <SearchIconWrapper>
                        <SearchIcon className="searchIcon"/>
                    </SearchIconWrapper>
                    <input type={"text"} className={"searchBar"} placeholder={"Search"} value={filter} onChange={(e) => {
                                                                                                                            setfilter(e.target.value)
                                                                                                                            if (e.target.value == '') {
                                                                                                                                dispatch(searchJobsAsync(e.target.value))
                                                                                                                            }
                                                                                                                        }}></input>
                    <input type="button" className="navBar-Button ml-[20px]" value="Search" onClick={() => {props.setSelectedJob(null); dispatch(searchJobsAsync(filter)); setfilter('')}}/>
                </div>
            </div>
        </nav>
    );
}