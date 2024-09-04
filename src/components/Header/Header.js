import { Link } from "react-router-dom";

function Header ({openSettings, onLanguage}){

    return(
        <header className="header">
                <div className="header__profile">
                    <div className="header__avatar"></div>
                        <p className="header__name">
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
                        <li className="header__list-item_menu">
                            <button type="button" className="header__menu" onClick={openSettings} />
                        </li>
                    </ul>
                </nav>
                
                <button type="button" className="header__settings" onClick={openSettings} />
        </header>
    )
}

export default Header;