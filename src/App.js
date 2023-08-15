import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Settings from './components/Settings/Settings';
import { api } from './utils/Api';

function App() {

  const [isOpenSettings, setOpenSettings] = useState(false);
  const [isLanguage, setIsLanguage] = useState('ru');
  const [projects, setProjects] = useState([]);

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
    <div className="page">
      <Header openSettings={openSettings} onLanguage={isLanguage} />
      <Main onLanguage={isLanguage} projects={projects} />
      <Footer onLanguage={isLanguage} />
      <Settings isOpenSettings={isOpenSettings} handleLanguage={setIsLanguage} onLanguage={isLanguage} />
    </div>
  );
}

export default App;
