import myPhoto from '../../images/KudinaPhoto.jpg'

function About({onLanguage}) {
    return (
        <section id='about' className="max-w-[90%] lg:max-w-full mx-auto">
            <h2 className="py-[60px] font-medium text-3xl">
                {onLanguage === 'ru' && 'Обо мне'}
                {onLanguage === 'en' && 'About me'}
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-4">
                <p className="w-[100%] md:w-[700px] text-xl">
                    {onLanguage === 'ru' && `С детства мечтал быть разработчиком игр, но выбор университета был сделан в пользу
                экологии. Пока работал, много интересовался программированием. Начинал с книжек Head
                First (HTML, CSS, JavaScript). Далее решил взять курс в Яндекс практикуме по Frontend
                разработке. Мне очень понравился процесс работы. Я старался соблюдать все дедлайны и
                качественно выполнял проекты. После курсов понял, что хочу и дальше видеть себя в
                веб-разработке и развиваться в ней. Мне нравится видеть результат своей работы.`}<br/>
                {onLanguage === 'ru' && `Я активный и любознательный. Хожу в походы, веду активный образ жизни. В свободное
                время занимаюсь плаванием и скалолазанием.`}

                {onLanguage === 'en' && `Since childhood, I dreamed of being a game developer, but the choice of the university was made in favor
                of ecology. While I was working, I was interested in programming a lot. I started with Head books
                First (HTML, CSS, JavaScript). Then I decided to take a course in Yandex practicum on Frontend
                development. I really liked the process of work. I tried to meet all deadlines and
                carried out projects efficiently. After the courses, I realized that I want to continue to see myself in
                web development and develop in it. I like to see the result of my work.`}<br/>
                {onLanguage === 'en' && `I am active and inquisitive. I go hiking, lead an active lifestyle. In free
                I spend my time swimming and climbing.`}
                </p>
                <img src={myPhoto} className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]  lg:w-[400px] lg:h-[400px] rounded-[2%]" alt='Мое фото' />
            </div>
            
        </section>
    )
}

export default About;