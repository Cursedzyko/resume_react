import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Overview from "./Overview.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: "overview",
                element: <Overview />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "education",
                element: <Education />
            },
            {
                path: "certificates",
                element: <Certificates />
            },
            {
                path: "projects",
                element: <Projects />
            },
        ]
    }
], {
    basename: '/resume_react/'
});

export default routes;
