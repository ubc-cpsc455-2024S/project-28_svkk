
import React from "react";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import CoverLetterPage from "./CoverLetterPage";
import Login from "./Login";

export default function Navbar() {

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
                    <input type={"text"} className={"searchBar"} placeholder={"Search"}></input>
    
                </div>
            </div>
        </nav>
    );
}