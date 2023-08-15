import { useState } from 'react';

function Settings({isOpenSettings, handleLanguage, onLanguage}){

    const [isModeDecoration, setIsModeDecoration] = useState('light');

    function handeleDecoration(){
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
        <div className={`settings__container${isOpenSettings ? '_open' : ''}`}>
            <ul className="settings__list">
                <li className="settings__item">
                    <h2 className='settings__list-title'>
                        {onLanguage === 'ru' && 'Язык:'}
                        {onLanguage === 'en' && 'Language:'}
                    </h2>
                    <button  className="settings__button settings__ru-mode" type="button" onClick={changeLanguageRu}>Ru</button>
                    <button  className="settings__button settings__en-mode" type="button" onClick={changeLanguageEn}>En</button>
                </li>
                <li className="settings__item">
                    <h2 className='settings__list-title'>
                        {onLanguage === 'ru' && 'Тема:'}
                        {onLanguage === 'en' && 'Mode:'}
                    </h2>
                    <button className={`settings__button settings__decoration-mode${isModeDecoration === 'light' ? '_dark' : '_light'}`} 
                    type="button" onClick={handeleDecoration} />
                </li>
            </ul>
        </div>
    )
}

export default Settings;