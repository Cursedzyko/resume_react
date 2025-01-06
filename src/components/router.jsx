import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Overview from "./Overiew.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";


const routes = createBrowserRouter([
    {
        path: "/resume_react/",
        element: <App />,
        children: [
            {
                index : true,
                element: <Overview />
            },
            {
                path : "/resume_react/overview",
                element: <Overview />
            },
            {
                path:"/resume_react/skills",
                element: <Skills />
            },
            {
                path:"/resume_react/education",
                element: <Education />
            },
            {
                path: "/resume_react/certificates",
                element: <Certificates />
            },
            {
                path: "/resume_react/projects",
                element: <Projects />
            },
        ]
    }
])

export default routes;