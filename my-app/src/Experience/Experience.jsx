import React from 'react'
import Phase1 from './Phase1'
import Phase2 from './Phase2'
import Phase3 from './Phase3'
import { AiFillInstagram} from 'react-icons/ai';
import { BiLogoTwitter} from 'react-icons/bi';
import { FaFacebookSquare} from 'react-icons/fa';
import { AiFillLinkedin} from 'react-icons/ai';
const Experience = () => {
  return (
    <div >
      <Phase1/>
      <Phase2/>
      <Phase3/>
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
    </div>
    </div>
  )
}

export default Experience