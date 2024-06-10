import { AiFillLinkedin} from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';
import { FaYoutube} from 'react-icons/fa';
import { AiOutlineGithub} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiFillInstagram} from 'react-icons/ai';
import { BiLogoTwitter} from 'react-icons/bi';
import { FaFacebookSquare} from 'react-icons/fa';


import"./Home.css"

const Home = () => {

    return (<div className="homepage">
       
        <div className="firstsection">
            <div className="intro">
                <h2 className="intra">Hi, My name is William Muhuni   </h2>
            </div>
            <div className="para">
                <p>A software developer with a passion of learning and creating</p>
            </div>
            <div className="iconhome">
            <Link className="homeicon"><AiFillLinkedin size={42}/></Link>
            <Link className="homeicon"><MdEmail size={42}/></Link>
            <Link className="homeicon"><FaYoutube size={42}/></Link>
            <Link className="homeicon"><AiOutlineGithub size={42}/></Link>
            </div>
        </div>
        <div className="skills">
            <div className="title"><h3 className="headskills">Skills</h3></div>
            <div className="frontend"><h2 className="titlebar">Front-End</h2>
             <p className="custom">
                ReactJs , HTML , CSS, StyledComponent and  Javascript
             </p>
             </div>
             <div className="language">
             <h2 className="lang">Languages</h2>
             <p className="par">
                Javascript , C# , C++ , C and TypeScript
             </p>
             </div>
        </div>
        <div className="footer">
    <div className="link">
            <ul>
         <li className="links"><a href="https://www.instagram.com/"><AiFillInstagram size={52}/></a></li> 
         <li className="links"><a href="https://twitter.com/"><BiLogoTwitter size={52}/></a></li> 
         <li className="links"><a href="https://www.facebook.com//"><FaFacebookSquare size={52}/></a></li> 
         <li className="links"><a href="https://www.linkedin.com//"><AiFillLinkedin size={52}/></a></li> 
            </ul></div>
            <div className="copy">
                <p className="copyright"> &copy; 2023 William Muhuni Kinyua.com </p>
            </div>
    </div> </div> );
}
 
export default Home;