import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Contacts from "../../pages/Contacts/Contacts";

function Main ({onLanguage, projects}){

    return (
        <main className="max-w-full mx-auto">
            <Projects onLanguage={onLanguage} projects={projects} />
            <About onLanguage={onLanguage} />
            <Skills onLanguage={onLanguage} />
            <Contacts onLanguage={onLanguage} />
        </main>
    )
}

export default Main;