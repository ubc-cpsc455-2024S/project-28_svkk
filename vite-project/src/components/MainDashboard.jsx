import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import CoverLetterPage from "./CoverLetterPage";
import Login from "./Login";

export default function MainDashboard() {
    return(
        <div className="main-dashboard" >
            <Navbar />
            <JobsContainer />
        </div>
        
    );
}