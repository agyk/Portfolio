import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Nav from './components/Nav'
import { useState,useEffect } from 'react'
import Loader from './components/Loader'


function App() {

  const [loaded, setLoaded ] = useState(false)
  const[darkMode, setDarkMode]=useState(false)
  function toggleDarkMode(){
    setDarkMode(prevDarkMode=> !prevDarkMode)
  }
  useEffect(()=>{
    let timer = setTimeout(() => setLoaded(true), 3000)
    return () => {clearTimeout(timer)}
  },[])

  return (
    
    <div id="App" className={darkMode ? "dark" : ""} >
      {!loaded ? <Loader/> : <>
     
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Home  darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      </>
     }
    </div>
    
    
  )
}

export default App
