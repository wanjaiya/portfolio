import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () =>(
    <div className="nav-bar">
        <Link className='logo' to='/'>
             <img src={LogoS} alt="Logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="#">
                <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar