import { Link } from "react-router-dom";
import"./Project.css"
import { AiFillInstagram} from 'react-icons/ai';
import { BiLogoTwitter} from 'react-icons/bi';
import { FaFacebookSquare} from 'react-icons/fa';
import { AiFillLinkedin} from 'react-icons/ai';
const Project = () => {
    return ( <div className="projecthome">
     <marquee>Welcome to the Project Page , this is where you see the unseen and unique works by &copy; <span className="owner">Kinyua William Muhuni</span> using spetaculaus skills in<span className="owner">HTML</span> ,<span className="owner">CSS</span>,<span className="owner">TypeScript</span>,<span className="owner">Javascript</span> and its framework:<span className="owner">ReactJs</span> to output margical  website</marquee>   
  <div className="section">
  <div className="homevideobg">
   <video src="./assest/forest.mp4"alt="Video not found,Kindly reload...."loop autoPlay muted className='bgvideo'></video></div>
<div className="paras"><h3 className="context">Projects <span className="in">Area</span> Detected</h3>

   <Link to='/work' className="btn">View Projects</Link></div></div>
   <div className="footers">
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
            </div>
   </div> );
}
 
export default Project;