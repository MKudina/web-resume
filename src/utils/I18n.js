import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        ru: {
            translation: {
              AboutMe: "Обо мне",
              Projects: "Проекты",
              Skills: "Скиллы",
              Contacts: "Контакты",
              TextMe: "Написать мне",
              Media: "Медиа",
              KudinaMaksim: "Кудина Максим",
              Mode: "Тема",
              Language: "Язык",
              PageNotFound: "Страница не найдена",
              BackMainPage: "Вернуться на главную",
              ViewGit: "Посмотреть Git",
              AboutProject: "О проекте",
              AboutMeTextone: "С детства мечтал быть разработчиком игр, но выбор университета был сделан в пользу экологии. Пока работал, много интересовался программированием. Начинал с книжек Head First (HTML, CSS, JavaScript). Далее решил взять курс в Яндекс практикуме по Frontend разработке. Мне очень понравился процесс работы. Я старался соблюдать все дедлайны и качественно выполнял проекты. После курсов понял, что хочу и дальше видеть себя в веб-разработке и развиваться в ней. Мне нравится видеть результат своей работы.",
              AboutMeTexttwo: "Я активный и любознательный. Хожу в походы, веду активный образ жизни. В свободное время занимаюсь плаванием и скалолазанием.",
            }
          },
      en: {
        translation: {
            AboutMe: "About me",
            Projects: "Projects",
            Skills: "Skills",
            Contacts: "Contacts",
            TextMe: "Text me",
            Media: "Media",
            KudinaMaksim: "Kudina Maksim",
            Mode: "Mode",
            Language: "Language",
            PageNotFound: "The page was not found",
            BackMainPage: "Go back to the main page",
            ViewGit: "View Git",
            AboutProject: "About project",
            AboutMeTextone: "Since childhood, I dreamed of being a game developer, but the choice of the university was made in favor of ecology. While I was working, I was interested in programming a lot. I started with Head books First (HTML, CSS, JavaScript). Then I decided to take a course in Yandex practicum on Frontend development. I really liked the process of work. I tried to meet all deadlines and carried out projects efficiently. After the courses, I realized that I want to continue to see myself in web development and develop in it. I like to see the result of my work.",
            AboutMeTexttwo: "I am active and inquisitive. I go hiking, lead an active lifestyle. In free I spend my time swimming and climbing.",
        }
      },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;