import { Link } from "react-router-dom"

function Navbar () {
    return <>
    <nav className="nav">
    <Link to="/" className="site-title">JOHN DOE</Link>
    <ul>
        <li>
        <Link to="/Home" className="site-title">Home</Link>
        </li>
        <li>
        <Link to="/Contact" className="site-title">Contact</Link>
            </li>
            <li>
            <Link to="/MentionLegale" className="site-title">Mention Legale</Link> 
            </li>
            <li>
            <Link to="/Portfolio" className="site-title">Portfolio</Link>
            </li>
            <li>
            <Link to="/ProfilGithub" className="site-title">Profil Github</Link>  
            </li>
            <li>
            <Link to="/Services" className="site-title">Services</Link><a href="/mentionlegales">Mention légales</a>
            </li>
    </ul>
</nav>
</>
}
export default Navbar

