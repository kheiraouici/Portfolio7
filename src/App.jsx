import { createBrowserRouter, Link, NavLink, RouterProvider} from 'react-router-dom';

import './App.css';

import Contact from "./pages/Contact";

import Home from "./pages/Home";

import MentionLegale from "./pages/MentionLegale";

import Portfolio from "./pages/Portfolio";

import ProfilGithub from "./pages/ProfilGithub";

import Services  from "./pages/Services";

import Footer from "./components/Footer";
import Main from './components/Main';

import NavbarM from "./components/NavbarM";


 



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

    element : <Services/>

  }

])




const App =() => {

  return  <RouterProvider router={Router}/> ,
( <>
  <NavbarM/>
 <Main/>
 <Footer/>

   </>

)
}

export  default App