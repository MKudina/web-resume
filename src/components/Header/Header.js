import { Link } from "react-router-dom";

function Header ({openSettings, onLanguage}){

    return(
        <header className="max-w-full py-8 flex flex-row justify-evenly items-center
        text-gray-100 bg-black">
                <div className="flex flex-row items-center gap-1 md:gap-[25px] text-3xl font-medium not-italic">
                    <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[85px] lg:h-[85px] 
                    bg-avatar bg-center bg-no-repeat bg-cover rounded-full box-border
                    border-2 border-solid border-white"></div>
                        <p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl">
                            Frontend developer<br/>
                            {onLanguage === 'ru' && 'Кудина Максим'}
                            {onLanguage === 'en' && 'Kudina Maksim'}
                        </p>
                </div>
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link to="/" className="header__link">
                                {onLanguage === 'ru' && 'Обо мне'}
                                {onLanguage === 'en' && 'About me'}
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/project" className="header__link">
                                {onLanguage === 'ru' && 'Проекты'}
                                {onLanguage === 'en' && 'Projects'}
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/skills" className="header__link">
                                {onLanguage === 'ru' && 'Скиллы'}
                                {onLanguage === 'en' && 'Skills'}
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/contacts" className="header__link">
                                {onLanguage === 'ru' && 'Контакты'}
                                {onLanguage === 'en' && 'Contacts'}
                            </Link>
                        </li>
                        <li className="">
                            <button type="button" className="w-9 h-9 lg:w-11 lg:h-11 
                            bg-black hover:bg-white bg-icon-menu-light hover:bg-icon-menu-dark 
                            bg-center bg-no-repeat bg-[length:30px_30px] rounded-full border-none 
                            cursor-pointer duration-[1000ms] lg:hidden" onClick={openSettings} />
                        </li>
                    </ul>
                </nav>
                
                <button type="button" className="w-9 h-9 lg:w-11 lg:h-11 bg-white bg-icon-settings 
                rounded-full border-none cursor-pointer transition-[transform] duration-[2000ms] 
                hover:rotate-180" onClick={openSettings} />
        </header>
    )
}

export default Header;