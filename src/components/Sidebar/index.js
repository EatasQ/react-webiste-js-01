import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserSecret, faUniversity, faEnvelope, faLink, } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to= "/">
                <FontAwesomeIcon icon = {faUniversity} /> 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className ="about-link" to= "/about">
                <FontAwesomeIcon icon = {faUserSecret }  /> 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to= "/contact">
                <FontAwesomeIcon icon = {faEnvelope}  /> 
            </NavLink>
    </nav>
            <ul>
                <li>
                    <a target = "_blank" rel = 'noreferrer' href= 'https://www.linkedin.com/in/erdo%C4%9Fan-ata%C5%9F-542b461a3/'>
                        <FontAwesomeIcon icon= {faLink}/> 
                    </a>
                    <a target = "_blank" rel = 'noreferrer' href= 'https://www.instagram.com/zzeastech/'>
                        <FontAwesomeIcon icon= {faLink}/> 
                    </a>
                </li>
            </ul>
    </div>


)

export default Sidebar