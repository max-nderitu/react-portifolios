import React from 'react'
import{Link }from "react-router-dom"
import"./Work.css"
import { AiFillInstagram} from 'react-icons/ai';
import { BiLogoTwitter} from 'react-icons/bi';
import { FaFacebookSquare} from 'react-icons/fa';
import { AiFillLinkedin} from 'react-icons/ai';
const Work = () => {
  return (
    <div className='workpage'>
         <div className="workable">
        <Link className="project"to="/"><img src="./Logo/E-commerce Logo.PNG" alt="Not Found" className='logotp'/>  <br/> E-Commerce</Link>
        <Link className="project"to="/project"><img src="./Logo/gym logo.PNG" alt="Not Found" className='logotp'/> <br/> Fitness Center</Link>
         <Link className="project"to="/experience"><img src="./Logo/BarberImg2.jpg" alt="Not Found" className='logotp'/><br/>Barbershop</Link>
        <Link className="project"to="/"> <img src="./logo512.png" alt="Not Found" className='logotp'/><br/>Portifolio</Link>
        <Link className="project"to="/project"> <img src="./Logo/showroom.jpg" alt="Not Found" className='logotp'/><br/>Car Delears</Link>
         <Link className="project"to="/experience"><img src="./Logo/bgimage.jpg" alt="Not Found" className='logotp'/><br/>Liquor Store </Link>
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
    </div>
        </div>

  )
}

export default Work