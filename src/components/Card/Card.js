function Card({onLanguage, project}) {

    return (
        <li className="w-full h-[250px] border-2 border-solid border-black rounded-xl 
        box-border flex flex-col justify-between gap-1">
                <h2 className="h-[50px] flex justify-center items-center text-center 
                bg-black font-medium text-xl text-white rounded-tl-lg rounded-tr-lg">
                    {project.name}
                </h2>
                <p className="mx-1 font-medium">
                    О проекте:<br/>
                    {project.description}
                </p>
                <a href={project.url} className="mr-1 ml-auto text-blue-600" target="__blank">Посмотреть Git</a>
        </li>
    )
}

export default Card;