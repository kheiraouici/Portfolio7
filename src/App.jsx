
import {createBrowserRoute} from "react-router-dom";
import './App.css';
import SearchBar from './components/SearchBar';

const router =createBrowserRoute([
  {
    path :"/",
    Element: <div>page d'accueil</div>,
  },
  {
    path :"/Home",
    element: <div>home</div>
  }
])

const App =() => {
 

  return (
    <>
   <div>bonjour</div>
      
    </>

  )
}

export default App
