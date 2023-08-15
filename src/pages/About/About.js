import myPhoto from '../../images/KudinaPhoto.jpg'

function About({onLanguage}) {
    return (
        <section id='about' className="about">
            <h2 className="about__title">
                {onLanguage === 'ru' && 'Обо мне'}
                {onLanguage === 'en' && 'About me'}
            </h2>
            <div className="about__me">
                <p className="about__text">
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
                <img src={myPhoto} className="about__photo" alt='Мое фото' />
            </div>
            
        </section>
    )
}

export default About;