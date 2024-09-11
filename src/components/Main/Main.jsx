import { Route, Routes } from "react-router-dom";
import Projects from "../../pages/Projects/Projects.jsx";
import About from "../../pages/About/About.jsx";
import Skills from "../../pages/Skills/Skills.jsx";
import Contacts from "../../pages/Contacts/Contacts.jsx";
import { Notfound } from "../../pages/404/404.jsx";

function Main ({onLanguage, projects}){

    return (
        <main className="lg:mx-20">
            <Routes>
                <Route path="/projects" element={<Projects onLanguage={onLanguage} projects={projects} />} />
                <Route path="/" element={<About onLanguage={onLanguage} />} />
                <Route path="/skills" element={<Skills onLanguage={onLanguage} />} />
                <Route path="/contacts" element={<Contacts onLanguage={onLanguage} />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </main>
    )
}

export default Main;