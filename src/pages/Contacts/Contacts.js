function Contacts({onLanguage}) {
    return (
        <section id="contacts" className="contacts">
            <h2 className="contacts__title">
                {onLanguage === 'ru' && 'Контакты'}
                {onLanguage === 'en' && 'Contacts'}
            </h2>
            <div className="contact__container">
                <div className="contacts__text-me-container">
                    <h2 className="contacts__text-me-title">
                        {onLanguage === 'ru' && 'Написать мне'}
                        {onLanguage === 'en' && 'Text me'}
                    </h2>
                    <ul  className="contacts__text-me-list">
                        <li className="contacts__text-me-list-item">
                            <div className="contact__icon contact__icon_email"></div>
                            <a href="KudinaMD@Yandex.ru" className="contacts__text-me-link">KudinaMD@Yandex.ru</a>
                        </li>
                        <li className="contacts__text-me-list-item">
                            <div className="contact__icon contact__icon_telegram"></div>
                            <a href="https://t.me/KudinaMD"  className="contacts__text-me-link" target="__blank">@KudinaMD</a>
                        </li>
                        <li className="contacts__text-me-list-item">
                            <div className="contact__icon contact__icon_phone"></div>
                            +7(903)291-39-43
                        </li>
                    </ul>
                </div>
                <div className="contacts__media-container">
                    <h2 className="contacts__media-title">
                        {onLanguage === 'ru' && 'Медиа:'}
                        {onLanguage === 'en' && 'Media:'}
                    </h2>
                    <ul className="contacts__media-list">
                        <li className="contacts__media-list-item">
                            <a href="https://github.com/MKudina" target="__blank">
                                <div className="contacts__media-list-item contacts__link_git"></div>
                            </a>
                        </li>
                        <li className="contacts__media-list-item">
                            <a href="https://vk.com/38crew" target="__blank">
                                <div className="contacts__media-list-item contacts__link_vk"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts;