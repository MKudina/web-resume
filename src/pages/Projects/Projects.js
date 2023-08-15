import Card from "../../components/Card/Card";

function Projects ({onLanguage, projects}){

    return (
        <section  id="project" className="projects">
            <h2 className="projects__title">
                {onLanguage === 'ru' && 'Проекты'}
                {onLanguage === 'en' && 'Projects'}
            </h2>
            <ul className="projects__list-cards">
                {projects.map((project) => (
                    <Card project={project} key={project.id} onLanguage={onLanguage} />
                ))}
            </ul>
        </section>
    )
}

export default Projects;