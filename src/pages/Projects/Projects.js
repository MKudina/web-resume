import Card from "../../components/Card/Card";

function Projects ({onLanguage, projects}){

    return (
        <section  id="project" className="max-w-[90%] lg:max-w-full mx-auto">
            <h2 className="py-[60px] font-medium text-3xl">
                {onLanguage === 'ru' && 'Проекты'}
                {onLanguage === 'en' && 'Projects'}
            </h2>
            <ul className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {projects.map((project) => (
                    <Card project={project} key={project.id} onLanguage={onLanguage} />
                ))}
            </ul>
        </section>
    )
}

export default Projects;