function Skills({onLanguage}){
    return (
        <section id="skills" className="skills">
            <h2 className="skills__title">
                {onLanguage === 'ru' && 'Скиллы'}
                {onLanguage === 'en' && 'Skills'}
            </h2>
            <ul className="skills__list">
                <li className="skills__list-item skills__html"></li>
                <li className="skills__list-item skills__css"></li>
                <li className="skills__list-item skills__js"></li>
                <li className="skills__list-item skills__react"></li>
                <li className="skills__list-item skills__git"></li>
            </ul>
        </section>
    )
}

export default Skills;