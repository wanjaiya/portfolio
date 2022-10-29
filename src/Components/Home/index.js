
import { useInsertionEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoP from '../../assets/images/logo-p.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';


const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['W','a','n','j','a','i','y','a']
    const jobArray = ['W','e','b',' ','d','e','v','e','l','o','p','e','r']


    useInsertionEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (

        <div className='container home-page'>
           <div className='text-zone'>
              <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
              
              <img src={LogoP} alt="Developer" />
            <AnimatedLetters letterClass={letterClass}
             strArray={nameArray}
             idx={15} />
              <br />
            <AnimatedLetters letterClass={letterClass}
             strArray={jobArray}
             idx={23} />
              </h1>
              <h2> Frontend and Backend Developer / Laravel expert / Open edx administrator</h2>
              <Link to="/contact" className='flat-button'> CONTACT ME</Link>
           </div>
           
        </div>
    );
}


export default Home

