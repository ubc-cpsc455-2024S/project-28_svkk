import MainDashboard from './components/MainDashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import CoverLetterPage from './components/CoverLetterCreationComponents/CoverLetterPage';
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from "@mui/material/colors";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";
import EditAccount from "./components/EditAccount.jsx";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00C3FF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decoded.exp > currentTime) {
                    // Token is valid
                    setIsAuthenticated(true);
                } else {
                    // Token is expired
                    localStorage.removeItem('jwtToken');
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Failed to decode JWT:', error);
                setIsAuthenticated(false);
            }
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/maindashboard"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <MainDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/coverletterpage"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <CoverLetterPage userResumes={[]} userCoverLetters={[]} userJobPostings={[]} />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/editaccount"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <EditAccount />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App
