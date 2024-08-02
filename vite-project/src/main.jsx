import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import ErrorPage from './error-page.jsx';
import MainDashboard from './components/JobsDashboard/MainDashboard.jsx';
import Signup from './components/Signup.jsx';
import CoverLetterPage from './components/CoverLetterCreationComponents/CoverLetterPage.jsx';
import EditAccounts from './components/EditAccounts.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// code for implementation of react router for linking pages: 
// https://reactrouter.com/en/main/start/tutorial
// https://stackoverflow.com/questions/44387318/linking-button-to-another-page


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/MainDashboard",
    element: <MainDashboard />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/Signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/EditAccounts",
    element: <EditAccounts />,
    errorElement: <ErrorPage />
  },
  {
    path: "/CoverLetterPage",
    element: <CoverLetterPage/>,
    errorElement: <ErrorPage />
  }
]);

const theme = createTheme({
  palette: {
    bg: '#EFF7F8',
    shadow: '#DFEAEA',
    teal: '#1199A9',
    darkTeal: '#0C6F7B'
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={'869398522193-9j7n8el0o9p36t14mvck3f1vg0f91l4q.apps.googleusercontent.com'}>
          <RouterProvider router={router}/>
        </GoogleOAuthProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
