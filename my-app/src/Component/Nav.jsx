import { Link } from "react-router-dom";
import"./Nav.css"
const Nav = () => {
    return (<div className="navpage"> <div className="navbar">
        <Link className="nav"to="/">Home</Link>
        <Link className="nav"to="/project">Project</Link>
        <Link className="nav"to="/experience">Experience</Link>
    </div></div> );
}
 
export default Nav;