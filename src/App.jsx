
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';


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
 

  return (
    <>
   <div><h1>hello</h1></div>
   <RouterProvider router={Router}/>
      <a href="./pages/Home">home</a>
      <a href="./pages/Contact">contact</a>
    </>

  )
}

export default App
