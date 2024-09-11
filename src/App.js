import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Settings from './components/Settings/Settings.jsx';
import { api } from './utils/Api';
import useTheme from './hooks/use-theme';

function App() {

  const [isOpenSettings, setOpenSettings] = useState(false);
  const [isLanguage, setIsLanguage] = useState('ru');
  const [projects, setProjects] = useState([]);
  const {theme, setTheme} = useTheme();

  function openSettings(){
    if (!isOpenSettings){
      setOpenSettings(true);
    } else {
      setOpenSettings(false);
    }
  }

  //GET Projects

  useEffect(() => {
    api.getProjects()                                               //Получаем проекты из GitHub
      .then((res) => { 
        setProjects(res.map((res) => {                             
          return {name: res.name, description: res.description, id: res.id, url: res.html_url}     //Кладем name, description, id,
        }));                                                                                       // и ссылку в projects
      })
      .catch(err => console.log(err));
  }, [setProjects])

  return (
    <div className="max-w-full h-full mx-auto flex flex-col font-inter text-black bg-white relative">
      <Header openSettings={openSettings} onLanguage={isLanguage} />
      <Main onLanguage={isLanguage} projects={projects} />
      <Footer onLanguage={isLanguage} />
      <Settings isOpenSettings={isOpenSettings} handleLanguage={setIsLanguage} onLanguage={isLanguage} 
      handleTheme={setTheme} onTheme={theme} />
    </div>
  );
}

export default App;
