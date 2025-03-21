
import {createBrowserRoute, RouterProvider} from "react-router-dom";
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
  {
    path :"/Contact",
    element: <div>Contact</div>
  }
])

const App =() => {
 

  return (
    <>
   <div><h1>hello</h1></div>
  <RouterProvider router={router}/>
      <a href="./pages/Home">home</a>
      <a href="./pages/Contact"></a>
    </>

  )
}

export default App
