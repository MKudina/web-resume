import { useTranslation } from "react-i18next";

function Footer() {
    const curretYear = new Date().getFullYear()
    const { t } = useTranslation();

    return (
        <footer className="pt-14 text-center">
            <p className="py-9 text-base font-semibold tracking-wider">
                {t('KudinaMaksim')}, 
                {curretYear === 2023 ? curretYear : `2023-${curretYear}`}</p>
        </footer>
    )
}

export default Footer;