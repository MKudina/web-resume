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
                            <a href="#project" className="header__link">
                                {onLanguage === 'ru' && 'Проекты'}
                                {onLanguage === 'en' && 'Projects'}
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="#about" className="header__link">
                                {onLanguage === 'ru' && 'Обо мне'}
                                {onLanguage === 'en' && 'About me'}
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="#skills" className="header__link">
                                {onLanguage === 'ru' && 'Скиллы'}
                                {onLanguage === 'en' && 'Skills'}
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="#contacts" className="header__link">
                                {onLanguage === 'ru' && 'Контакты'}
                                {onLanguage === 'en' && 'Contacts'}
                            </a>
                        </li>
                        <li className="header__list-item_menu">
                            <button type="button" className="header__menu" />
                        </li>
                    </ul>
                </nav>
                
                <button type="button" className="header__settings" onClick={openSettings} />
        </header>
    )
}

export default Header;