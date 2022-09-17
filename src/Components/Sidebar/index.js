import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>(
    <div className="nav-bar">
        <Link className='logo' to='/'>
             <img src={LogoS} alt="Logo" />
        </Link>
        <NavLink exact="true" activeclassname="active" to="/">
         <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
         <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
         <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
        
    </div>
)
export default Sidebar