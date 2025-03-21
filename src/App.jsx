
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Router = createBrowserRouter([
  {
    path :"/",
    element: <div>page d'accueil</div>,
  },
  {
    path :"/Home",
    element: <div>home</div>
  },
  {
    path :"/Contact",
    element: <div>Contact</div>
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
