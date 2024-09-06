import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Contacts from "../../pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";
import { Notfound } from "../../pages/404/404";

function Main ({onLanguage, projects}){

    return (
        <main className="lg:mx-20">
            <Routes>
                <Route path="/project" element={<Projects onLanguage={onLanguage} projects={projects} />} />
                <Route path="/" element={<About onLanguage={onLanguage} />} />
                <Route path="/skills" element={<Skills onLanguage={onLanguage} />} />
                <Route path="/contacts" element={<Contacts onLanguage={onLanguage} />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </main>
    )
}

export default Main;