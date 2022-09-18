
import { Link } from 'react-router-dom';
import LogoP from '../../assets/images/logo-p.png';
import './index.scss';

const Home = ()=>{

    return (

        <div className='container home-page'>
           <div className='text-zone'>
              <h1>Hi, <br /> I'm
              <img src={LogoP} alt="Developer" />
              KWanjaiya
              <br />
              Web Developer
              </h1>
              <h2> Frontend and Backend Developer / Laravel expert / Open edx administrator</h2>
              <Link to="/contact" className='flat-button'> CONTACT ME</Link>
           </div>

        </div>
    );
}


export default Home

