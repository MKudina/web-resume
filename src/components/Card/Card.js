function Card({onLanguage, project}) {

    return (
        <li className="card">
                <h2 className="card__name">
                    {project.name}
                </h2>
                <p className="card__about">
                    О проекте:<br/>
                    {project.description}
                </p>
                <a href={project.url} className="card__link">Посмотреть Git</a>
        </li>
    )
}

export default Card;