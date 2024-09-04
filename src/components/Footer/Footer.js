function Footer({onLanguage}) {
    let curretYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <p className="footer__copyright">
                {onLanguage === 'ru' && 'Кудина Максим, '}
                {onLanguage === 'en' && 'Kudina Maksim, '}
                {curretYear === 2023 ? curretYear : `2023-${curretYear}`}</p>
        </footer>
    )
}

export default Footer;