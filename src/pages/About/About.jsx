import { useTranslation } from 'react-i18next';
import myPhoto from '../../images/KudinaPhoto.jpg'

function About() {

    const { t } = useTranslation();

    return (
        <section id='about' className="max-w-[90%] lg:max-w-full mx-auto">
            <h2 className="py-[60px] font-medium text-3xl">
                {t('AboutMe')}
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-4">
                <p className="w-[100%] md:w-[700px] text-xl">
                    {t('AboutMeTextone')}
                    <br/>
                    {t('AboutMeTexttwo')}
                </p>
                <img src={myPhoto} className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]  lg:w-[400px] lg:h-[400px] rounded-[2%]" alt='Мое фото' />
            </div>
            
        </section>
    )
}

export default About;