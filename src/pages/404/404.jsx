import { Link } from "react-router-dom"

export const Notfound = () => {
    return (
        <div className="flex flex-col items-center relative">
            <h2 className="pt-20 font-medium text-7xl">404</h2>
            <p className="text-2xl sm:text-3xl">Страница не найдена</p>
            <Link to={'/'} className="text-xl text-blue-500">Вернуться на главную</Link>
        </div>
    )
}