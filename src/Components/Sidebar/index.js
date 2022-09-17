import {Link} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';


const Sidebar = () =>(
    <div className="nav-bar">
        <Link className='logo' to='/'>
             <img src={LogoS} alt="Logo" />
        </Link>
    </div>
)
export default Sidebar