import { useTranslation } from "react-i18next";

function Skills(){

    const { t } = useTranslation();

    return (
        <section id="skills" className="max-w-[100%]">
            <h2 className="py-[60px] font-medium text-3xl">
                {t('Skills')}
            </h2>
            <ul className="flex flex-wrap gap-8">
                <li className="w-24 h-24 bg-no-repeat bg-center bg-contain bg-icon-skill-html"></li>
                <li className="w-24 h-24 bg-no-repeat bg-center bg-contain bg-icon-skill-css"></li>
                <li className="w-24 h-24 bg-no-repeat bg-center bg-contain bg-icon-skill-js"></li>
                <li className="w-24 h-24 bg-no-repeat bg-center bg-contain bg-icon-skill-react"></li>
                <li className="w-24 h-24 bg-no-repeat bg-center bg-contain bg-icon-skill-git"></li>
            </ul>
        </section>
    )
}

export default Skills;