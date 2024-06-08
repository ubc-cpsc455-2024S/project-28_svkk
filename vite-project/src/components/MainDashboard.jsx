import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";

export default function MainDashboard() {
    return(
        <div className="main-dashboard">
            <Navbar />
            <JobsContainer />
        </div>
        
    );
}