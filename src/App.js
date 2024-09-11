import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Settings from './components/Settings/Settings.jsx';
import { api } from './utils/Api';
import useTheme from './hooks/use-theme';
import './utils/I18n.js'

function App() {

  const [isOpenSettings, setOpenSettings] = useState(false);
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
      <Header openSettings={openSettings} />
      <Main projects={projects} />
      <Footer />
      <Settings isOpenSettings={isOpenSettings} handleTheme={setTheme} onTheme={theme} />
    </div>
  );
}

export default App;
