import react from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const nav =()=>{
    return {

        <Nav>
            <ul>
                <li>
                    <Link to={"/"}>home</Link>
                    <Link to="/Contact">contact</Link>
                </li>
            </ul>
        </Nav>
    }
}