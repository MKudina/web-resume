import { useState } from 'react';

function Settings({isOpenSettings, handleLanguage, onLanguage, handleTheme, onTheme}){

    const [isModeDecoration, setIsModeDecoration] = useState('light');

    function handeleTheme(){
        if (onTheme === 'light') {
            handleTheme('dark');
        } else {
            handleTheme('light');
        }

        if (isModeDecoration === 'light'){
          setIsModeDecoration('dark');

        } else {
          setIsModeDecoration('light');
        }
      }

    function changeLanguageEn(){
        handleLanguage('en')
    }
    function changeLanguageRu(){
        handleLanguage('ru')
    }

    return (
        <div className={`${isOpenSettings ? '' : 'hidden'} w-[200px] h-[250px] flex 
        bg-black rounded-lg justify-center absolute top-44 right-5 duration-[1500] 
        box-border border-[3px] border-solid border-gray-500 text-white`}>
            <ul className="w-[80%] flex flex-col justify-center gap-[15px]">
                <li>
                    <h2 className="w-[100%] font-medium text-3xl">
                        {onLanguage === 'ru' && 'Язык:'}
                        {onLanguage === 'en' && 'Language:'}
                    </h2>
                    <button  className="w-11 h-11 font-medium text-3xl cursor-pointer 
                    bg-black bg-center bg-no-repeat rounded-full duration-1000 hover:invert" 
                    type="button" onClick={changeLanguageRu}>Ru</button>
                    <button  className="w-11 h-11 ml-3 font-medium text-3xl cursor-pointer 
                    bg-black bg-center bg-no-repeat rounded-full duration-1000 hover:invert" 
                    type="button" onClick={changeLanguageEn}>En</button>
                </li>
                <li>
                    <h2 className="w-[100%] font-medium text-3xl">
                        {onLanguage === 'ru' && 'Тема:'}
                        {onLanguage === 'en' && 'Mode:'}
                    </h2>
                    <button className={`w-11 h-11 cursor-pointer bg-black bg-center bg-no-repeat 
                    rounded-full bg-[length:30px_30px] duration-1000 hover:invert hover:rotate-[360deg] 
                    ${isModeDecoration === 'light' ? 'bg-icon-dark-mode' : 'bg-icon-light-mode'}`} 
                    type="button" onClick={handeleTheme} />
                </li>
            </ul>
        </div>
    )
}

export default Settings;