
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { searchJobsAsync } from "../../redux/jobs/thunks";
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Navbar(props) {

    const userEmail = useSelector(state => state.userEmail.userEmail);

    const dispatch = useDispatch()

    const [filter, setfilter] = useState('')

    const theme = useTheme();

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '1.5em',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    {/* <i class='fa fa-search left:10px'></i> */}
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          // borderRadius: '1.25rem',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

      const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#FFFFFF',
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: 11,
          fontFamily: "Montserrat",
          borderRadius: '30px'
        },
      }));

    

    return(
        <nav className={"navBar"}>
            <div className={"navBar-Left"}>
                <h1 color={theme.palette.bg}>Application Tailor</h1>
                {/* new position of search bar*/}
                {/* <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search jobs"
                        sx={{ fontFamily: "Montserrat"}}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>     */}
                <div className={"searchBar-wrapper ml-6"}>
                    {/* <i class='fa fa-search left:10px'></i> */}
                    <SearchIconWrapper>
                        <SearchIcon className="searchIcon"/>
                    </SearchIconWrapper>
                    <InputBase type={"text"} 
                                className={"searchBar"} 
                                placeholder={"Search jobs"} 
                                value={filter} 
                                sx={{fontFamily: "Montserrat"}}
                                onChange={(e) => {
                                    setfilter(e.target.value)
                                    if (e.target.value == '') {
                                        let filter = e.target.value
                                        dispatch(searchJobsAsync({filter, userEmail}))
                                    }
                                }}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        props.setSelectedJob(null);
                                        console.log('dispatching search job');
                                        dispatch(searchJobsAsync({filter, userEmail}));
                                    }}}/>
                    
                </div>
            </div>
            <div className={"navBar-Right"}>
                <div className={"navBar-Buttons"}>
                    <LightTooltip title='Create Cover Letter'>
                        <Link to="/CoverLetterPage">
                            <IconButton>
                                <PostAddIcon fontSize="large" sx={{color: theme.palette.bg}}/>
                            </IconButton>
                        </Link>
                    </LightTooltip>
                    <LightTooltip title='Edit Account'>
                        <Link to="/EditAccount">
                            <IconButton>
                                <ManageAccountsIcon fontSize="large" sx={{color: theme.palette.bg}}/>
                            </IconButton>
                        </Link>
                    </LightTooltip>
                    <LightTooltip title='Sign Out'>
                        <Link to="/Login">
                            <IconButton className="iconButton">
                                <LogoutIcon className='logoutIcon' fontSize="large" sx={{color: theme.palette.bg}}/>
                            </IconButton>
                        </Link>
                    </LightTooltip>
                </div>
                 {/* search bar was here */}
                
            </div>
        </nav>
    );
}