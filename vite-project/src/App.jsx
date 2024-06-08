import MainDashboard from './components/MainDashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import CoverLetterPage from './components/CoverLetterPage';
import DropdownSelector from './components/DropdownSelector';
import WhitePageDisplay from './components/WhitePageDisplay';

function App() {

  return (
    <>
      <Login/>
      <Signup/>
      <MainDashboard/>
      <DropdownSelector allElements={[]} setSelectedElement=''/>
      <CoverLetterPage userResumes={[]} userCoverLetters={[]} userJobPostings={[]}/>
      <WhitePageDisplay displayText=''/>
    </>
  )
}

export default App
