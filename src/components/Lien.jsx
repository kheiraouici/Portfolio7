import { Link } from "react-router-dom";


function Navbar () {
    return <>
    <nav className="nav">
    <Link to="/" className="site-title">JOHN DOE</Link>
    
        
        <Link to="/Home" className="site-title">Home</Link>
        
        <Link to="/Contact" className="site-title">Contact</Link>
           
            <Link to="/MentionLegale" className="site-title">Mention Legale</Link> 
          
            <Link to="/Portfolio" className="site-title">Portfolio</Link>
           
            <Link to="/ProfilGithub" className="site-title">Profil Github</Link>  
           
            <Link to="/Services" className="site-title">Services</Link><a href="/mentionlegales">Mention légales</a>
    
</nav>
</>
}
export default Navbar

