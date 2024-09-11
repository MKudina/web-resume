import { useTranslation } from "react-i18next";
import Card from "../../components/Card/Card.jsx";

function Projects ({ projects }){

    const { t } = useTranslation();

    return (
        <section  id="project" className="max-w-[90%] lg:max-w-full mx-auto">
            <h2 className="py-[60px] font-medium text-3xl">
                {t('Projects')}
            </h2>
            <ul className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {projects.map((project) => (
                    <Card project={project} key={project.id} />
                ))}
            </ul>
        </section>
    )
}

export default Projects;