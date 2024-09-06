function Footer({onLanguage}) {
    const curretYear = new Date().getFullYear()

    return (
        <footer className="pt-14 text-center">
            <p className="py-9 text-base font-semibold tracking-wider">
                {onLanguage === 'ru' && 'Кудина Максим, '}
                {onLanguage === 'en' && 'Kudina Maksim, '}
                {curretYear === 2023 ? curretYear : `2023-${curretYear}`}</p>
        </footer>
    )
}

export default Footer;