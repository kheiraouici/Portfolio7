import { NavLink } from "react-router-dom"


function Root (){
    return <>
      <header>
        <nav>
          <NavLink to="/Home">Home</NavLink>
        </nav>
      </header>
    </>
  }
  export default Root