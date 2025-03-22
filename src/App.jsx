
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from './components/Link';
import Home from "./pages/Home";
import MentionLegale from "./pages/MentionLegale";
import Portfolio from "./pages/Portfolio";
import ProfilGithub from "./pages/ProfilGithub"; 
import Services  from "./pages/Services";

const Router = createBrowserRouter([
  {
    path :"/",
    element : <Home/>
  },
  {
    path :"/Home",
    element : <Home/>
  },
  {
    path :"/Contact",
    element: <Contact/>,
  },
  {
    path :"/MentionLegale",
    element : <MentionLegale/>
  },
  {
    path :"/Portfolio",
    element : <Portfolio/>
  },
  {
    path :"/ProfilGithub",
    element : <ProfilGithub/>
  },
  {
    path :"/Services",
    element : <Serv/>
  }
])



const App =() => {
  <RouterProvider Router={Router}/>

  return (
    <> 
 <Navbar/>
   
  <Main/>
   <Footer/>
   
   
     
    </>

  )
}

export default App
