import { useTranslation } from "react-i18next";

function Contacts() {

    const { t } = useTranslation();

    return (
        <section id="contacts" className="max-w-[90%] lg:max-w-full mx-auto">
            <h2 className="w-full py-[60px] font-medium text-3xl">
                {t('Contacts')}
            </h2>
            <div className="max-w-[500px] flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                <div>
                    <h2 className="mb-4 font-medium text-xl sm:text-2xl">
                        {t('TextMe')}:
                    </h2>
                    <ul  className="flex flex-col gap-1">
                        <li className="flex gap-3 text-lg sm:text-2xl">
                            <div className="w-7 h-7 bg-no-repeat bg-center bg-contain bg-icon-email"></div>
                            <a href="/" className="text-blue-600 visited:text-purple-600">KudinaMD@Yandex.ru</a>
                        </li>
                        <li className="flex gap-3 text-lg sm:text-2xl">
                            <div className="w-7 h-7 bg-no-repeat bg-center bg-contain bg-icon-telegram"></div>
                            <a href="https://t.me/KudinaMD"  className="text-blue-600 visited:text-purple-600" target="__blank">@KudinaMD</a>
                        </li>
                        <li className="flex gap-3 text-lg sm:text-2xl text-blue-600">
                            <div className="w-7 h-7 bg-no-repeat bg-center bg-contain bg-icon-phone"></div>
                            +7(903)291-39-43
                        </li>
                    </ul>
                </div>
                <div className="max-w-[70px] sm:max-w-[300px] lg:ml-24 flex flex-col">
                    <h2 className="mb-4 font-medium text-xl sm:text-2xl">
                        {t('Media')}:
                    </h2>
                    <ul className="w-[164px] flex flex-row flex-wrap justify-start gap-2">
                        <li>
                            <a href="https://github.com/MKudina" target="__blank">
                                <div className="w-[48px] h-[48px] bg-no-repeat bg-center bg-[length:38px_38px] hover:bg-[length:48px_48px] duration-500 bg-icon-git"></div>
                            </a>
                        </li>
                        <li>
                            <a href="https://vk.com/38crew" target="__blank">
                                <div className="w-[48px] h-[48px] bg-no-repeat bg-center bg-[length:38px_38px] hover:bg-[length:48px_48px] duration-500 bg-icon-vk"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts;