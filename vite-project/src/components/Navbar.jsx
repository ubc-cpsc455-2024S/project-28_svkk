
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Navbar() {

    return(
        <nav className={"navBar"}>
            <div className={"navBar-Left"}>
                <h1> Job Application</h1>
            </div>
            <div className={"navBar-Right"}>
                <div className={"navBar-Buttons"}>
                    <button className={"navBar-Button"}> Create Cover Letter</button>
                    <button className={"navBar-Button"}> Sign out</button>
                </div>
                <div className={"searchBar-wrapper"}>
                    <span className="searchIcon">&#128269;</span>
                    <input type={"text"} className={"searchBar"} placeholder={"Search"}></input>
                </div>
            </div>
        </nav>
    );
}