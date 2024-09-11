import { useTranslation } from "react-i18next";
import { Tabs } from "../Tabs/Tabs.jsx";

function Header ({openSettings}){

    const { t } = useTranslation();

    return(
        <header className="max-w-full py-8 flex flex-row justify-evenly items-center
        text-gray-100 bg-black">
                <div className="flex flex-row items-center gap-1 md:gap-[25px] text-3xl font-medium">
                    <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[85px] lg:h-[85px] 
                    bg-avatar bg-center bg-no-repeat bg-cover rounded-full box-border
                    border-2 border-solid border-white"></div>
                        <p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl">
                            Frontend developer<br/>
                            {t('KudinaMaksim')}
                        </p>
                </div>
                <nav className="w-10 lg:w-2/5">
                    <Tabs />
                    <button type="button" className="w-9 h-9 lg:w-11 lg:h-11 
                    bg-white bg-icon-menu-dark 
                    bg-center bg-no-repeat bg-[length:25px_25px] rounded-full border-none 
                    cursor-pointer duration-[1000ms] lg:hidden" onClick={openSettings} />
                </nav>
                
                <button type="button" className="w-9 h-9 lg:w-11 lg:h-11 bg-white bg-icon-settings 
                rounded-full border-none cursor-pointer transition-[transform] duration-[2000ms] 
                hover:rotate-180" onClick={openSettings} />
        </header>
    )
}

export default Header;